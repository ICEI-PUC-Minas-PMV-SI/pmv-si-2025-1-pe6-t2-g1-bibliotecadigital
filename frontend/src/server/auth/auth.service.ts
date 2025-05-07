
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

// Simplified auth service for student project
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    // Check if user exists
    const userExists = await this.usersService.findByEmail(registerDto.email);
    if (userExists) {
      throw new Error('User with this email already exists');
    }

    // Hash password - simplified version
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    
    // Create new user
    const newUser = await this.usersService.create({
      ...registerDto,
      password: hashedPassword,
    });

    // Generate JWT - simplified
    const payload = { sub: newUser.id, email: newUser.email };
    const access_token = this.jwtService.sign(payload);

    // Return user and token
    const { password, ...user } = newUser;
    return { user, access_token };
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT
    const payload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload);

    // Return user without password and token
    const { password: _, ...result } = user;
    return { user: result, access_token };
  }

  // Simplified social login
  async socialLogin(userData) {
    // Check if user exists
    let existingUser = await this.usersService.findByEmail(userData.email);
    
    // If not, create new user
    if (!existingUser) {
      existingUser = await this.usersService.create({
        name: userData.name,
        email: userData.email,
        photoUrl: userData.photoUrl,
        preferences: [],
        // Social login users don't have passwords
        password: null,
      });
    }

    // Generate JWT
    const payload = { sub: existingUser.id, email: existingUser.email };
    const access_token = this.jwtService.sign(payload);

    // Return user and token
    const { password, ...result } = existingUser;
    return { user: result, access_token };
  }
}

import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findById(id: string) {
    return this.usersRepository.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  delete(id: string) {
    return this.usersRepository.delete(id);
  }

  updatePassword(id: string, oldPassword: string, newPassword: string) {
    return this.usersRepository.updatePassword(id, oldPassword, newPassword);
  }
}

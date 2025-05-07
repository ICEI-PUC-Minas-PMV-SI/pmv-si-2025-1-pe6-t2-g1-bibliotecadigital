
// Simple auth service for the frontend

// Mock data for demonstration
const USERS = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123', // In real app, this would be hashed!
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop',
    preferences: ['fiction', 'sci-fi', 'fantasy'],
    joinDate: new Date('2023-01-15')
  }
];

// This would be replaced with actual API calls in a real app
export const authService = {
  // Login function
  login: async (email: string, password: string) => {
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000));
    
    const user = USERS.find(user => 
      user.email === email && user.password === password
    );
    
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    // In a real app, we'd get a token from the backend
    const token = 'mock-jwt-token';
    
    // Store in localStorage (not secure, but common in student projects)
    localStorage.setItem('user', JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
      photoUrl: user.photoUrl,
      token
    }));
    
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        photoUrl: user.photoUrl
      },
      token
    };
  },
  
  // Register function
  register: async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000));
    
    // Check if user already exists
    if (USERS.some(user => user.email === email)) {
      throw new Error('User already exists');
    }
    
    // Create new user (in a real app, this would be done on the backend)
    const newUser = {
      id: `${USERS.length + 1}`,
      name,
      email,
      password, // In real app, this would be hashed!
      photoUrl: '',
      preferences: [],
      joinDate: new Date()
    };
    
    // In a real app, we'd get a token from the backend
    const token = 'mock-jwt-token';
    
    // Store in localStorage
    localStorage.setItem('user', JSON.stringify({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      photoUrl: newUser.photoUrl,
      token
    }));
    
    return {
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        photoUrl: newUser.photoUrl
      },
      token
    };
  },
  
  // Logout function
  logout: () => {
    localStorage.removeItem('user');
  },
  
  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  
  // Check if user is logged in
  isLoggedIn: () => {
    return !!localStorage.getItem('user');
  }
};

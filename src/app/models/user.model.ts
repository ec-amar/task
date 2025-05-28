export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  createdAt?: Date;
  lastLogin?: Date;
} 
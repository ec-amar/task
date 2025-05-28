import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private readonly STORAGE_KEY = 'kland_users';

  constructor(private http: HttpClient) {
    this.loadUsersFromStorage();
  }

  private loadUsersFromStorage(): void {
    const storedUsers = localStorage.getItem(this.STORAGE_KEY);
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  private saveUsersToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.users));
  }

  createUser(userData: User): Observable<User> {
    // Check if email already exists
    if (this.users.some(user => user.email === userData.email)) {
      return throwError(() => new Error('Email already registered'));
    }

    // Add user to the array
    this.users.push(userData);
    
    // Save to localStorage
    this.saveUsersToStorage();
    
    return of(userData);
  }

  login(email: string, password: string): Observable<User> {
    const user = this.users.find(u => u.email === email && u.password === password);
    
    if (user) {
      return of(user);
    } else {
      return throwError(() => new Error('Invalid email or password'));
    }
  }

  getUserByEmail(email: string): Observable<User | null> {
    const user = this.users.find(u => u.email === email);
    return of(user || null);
  }

  updateUser(userData: User): Observable<User> {
    const index = this.users.findIndex(u => u.email === userData.email);
    
    if (index === -1) {
      return throwError(() => new Error('User not found'));
    }
    
    this.users[index] = userData;
    this.saveUsersToStorage();
    
    return of(userData);
  }

  deleteUser(email: string): Observable<boolean> {
    const initialLength = this.users.length;
    this.users = this.users.filter(u => u.email !== email);
    
    if (this.users.length === initialLength) {
      return throwError(() => new Error('User not found'));
    }
    
    this.saveUsersToStorage();
    return of(true);
  }
} 
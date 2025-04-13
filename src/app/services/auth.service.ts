import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable();

  login(username: string, role: 'user' | 'admin') {
    const user: User = { id: 1, username, role };
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }

  isAdmin(): boolean {
    return this.userSubject.value?.role === 'admin';
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }

  getUser(): User | null {
    return this.userSubject.value;
  }
}

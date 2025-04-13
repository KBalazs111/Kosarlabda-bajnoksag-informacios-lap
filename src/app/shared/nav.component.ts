import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  standalone: true,
  selector: 'app-nav',
  imports: [RouterModule, NgIf, MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule],
  template: `
    <mat-toolbar color="primary" class="nav-toolbar">
      <div class="nav-container">
        <div class="nav-left">
          <a mat-button routerLink="/">
            <mat-icon>home</mat-icon>
            <span>Főoldal</span>
          </a>
          
          <a mat-button routerLink="/teams">
            <mat-icon>groups</mat-icon>
            <span>Csapatok</span>
          </a>
          
          <a mat-button routerLink="/profile">
            <mat-icon>person</mat-icon>
            <span>Profil</span>
          </a>
          
          <a mat-button *ngIf="auth.isAdmin()" routerLink="/admin">
            <mat-icon>admin_panel_settings</mat-icon>
            <span>Admin</span>
          </a>
        </div>
        
        <div class="nav-right">
          <a mat-button *ngIf="!auth.isLoggedIn()" routerLink="/login">
            <mat-icon>login</mat-icon>
            <span>Bejelentkezés</span>
          </a>
          
          <div *ngIf="auth.isLoggedIn()" class="user-info">
            <span class="username-display">
              <mat-icon>account_circle</mat-icon>
              {{ auth.getUser()?.username }}
            </span>
            
            <button mat-raised-button color="warn" (click)="logout()">
              <mat-icon>logout</mat-icon>
              Kijelentkezés
            </button>
          </div>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .nav-toolbar {
      height: 64px;
      padding: 0 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .nav-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .nav-left, .nav-right {
      display: flex;
      align-items: center;
    }
    
    a {
      text-decoration: none;
      height: 36px;
      border-radius: 4px;
      margin-right: 8px;
      display: flex;
      align-items: center;
      transition: background-color 0.3s;
    }
    
    a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    mat-icon {
      margin-right: 4px;
    }
    
    .user-info {
      display: flex;
      align-items: center;
    }
    
    .username-display {
      display: flex;
      align-items: center;
      margin-right: 16px;
      font-weight: 500;
    }
    
    button {
      transition: all 0.3s ease;
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
      span {
        display: none;
      }
      
      mat-icon {
        margin-right: 0;
      }
      
      .username-display {
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  `]
})
export class NavComponent {
  constructor(public auth: AuthService, private router: Router) {}
  
  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
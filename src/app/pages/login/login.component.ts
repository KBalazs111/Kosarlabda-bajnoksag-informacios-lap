import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-login-page',
  imports: [
    FormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatButtonModule, 
    MatCardModule,
    MatIconModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent {
  username = '';
  role: 'user' | 'admin' = 'user';
  
  constructor(private auth: AuthService, private router: Router) {}
  
  login() {
    if (this.username.trim() !== '') {
      this.auth.login(this.username, this.role);
      this.router.navigateByUrl('/');
    }
  }
}
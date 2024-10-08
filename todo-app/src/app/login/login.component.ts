import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  
  constructor(private authService: AuthService, private router: Router) {}
  
  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      // next: () => this.router.navigate(['/todo']),
      error: () => this.errorMessage = 'Invalid login attempt'
    });
  }
}



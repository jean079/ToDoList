import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url/api/auth'; // Replace with your API URL

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        map(response => {
          // Store the JWT token in local storage
          localStorage.setItem('jwtToken', response.token);
          return true;
        })
      );
  }

  logout(): void {
    // Remove the JWT token from local storage
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    // Check if the JWT token is in local storage
    return !!localStorage.getItem('jwtToken');
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
}

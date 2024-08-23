import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5269/api/auth'; // Replace with your API URL
  private isAuthenticatedUser = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        map(response => {

          if (response.success) {
            this.isAuthenticatedUser = true;
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout(): void {
    this.isAuthenticatedUser = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }
}

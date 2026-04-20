import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/auth/login/';
  
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  // Guardar token
  setToken(token: string): void {
    if (typeof window !== 'undefined') {
    return localStorage.setItem('access_token', token);
    }
  }

  // Obtener token
  getToken(): string | null {
    // Preguntamos si existe el objeto window (propio de los navegadores)
    if (typeof window !== 'undefined') {
      return localStorage.getItem('access_token');
    }
    return null;
  }

  // Cerrar sesión
  logout(): void {
    if (typeof window !== 'undefined') {
    localStorage.removeItem('access_token');
    }
  }

  // Saber si está logueado
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

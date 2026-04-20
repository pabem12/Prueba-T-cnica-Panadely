import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.error = '';
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        // SimpleJWT devuelve el token dentro de la propiedad 'access'
        this.authService.setToken(res.access);
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        this.error = 'Credenciales inválidas';
      }
    });
  }
}
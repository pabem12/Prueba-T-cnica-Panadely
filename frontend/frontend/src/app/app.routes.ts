import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { ProductosComponent } from './components/productos.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'productos', 
    component: ProductosComponent, 
    canActivate: [authGuard] 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } 
];
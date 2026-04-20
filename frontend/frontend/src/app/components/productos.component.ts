import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../services/producto.services';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  modoEdicion: boolean = false;
  productoActual: Producto = { id: 0, nombre: '', precio: 0, stock: 0 };

  constructor(
    private productoService: ProductoService, 
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef  // ← Inyecta ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.listar().subscribe(data => {
      this.productos = data;
      this.cdr.detectChanges();  // ← Fuerza la detección de cambios
      console.log('Productos cargados:', this.productos); // Para debug
    });
  }

  guardarProducto() {
    if (this.modoEdicion) {
      this.productoService.editar(this.productoActual).subscribe(() => {
        this.resetFormulario();
        this.cargarProductos();
        this.cdr.detectChanges();
      });
    } else {
      const { id, ...productoNuevo } = this.productoActual;
      this.productoService.crear(productoNuevo).subscribe(() => {
        this.resetFormulario();
        this.cargarProductos();
        this.cdr.detectChanges();
      });
    }
  }

  editarProducto(producto: Producto) {
    this.modoEdicion = true;
    this.productoActual = { ...producto };
    this.cdr.detectChanges();
  }

  eliminarProducto(id: number) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.eliminar(id).subscribe(() => {
        this.cargarProductos();
        this.cdr.detectChanges();
      });
    }
  }

  resetFormulario() {
    this.modoEdicion = false;
    this.productoActual = { id: 0, nombre: '', precio: 0, stock: 0 };
    this.cdr.detectChanges();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

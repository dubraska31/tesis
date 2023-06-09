import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { UtilService } from '../util-service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  menus: Menu[] = [];

  constructor(
    private utilService: UtilService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getComidas();
  }

  getComidas(): void {
    this.menus = this.utilService.getComidasCarrito();
  }

  pagar(): void {
    this.utilService.limpiarCarrito();
    this.router.navigate(['/pago']);
  }

}

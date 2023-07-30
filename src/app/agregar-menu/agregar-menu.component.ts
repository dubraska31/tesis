import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ingrediente } from '../ingrediente';
import { IngredienteEnMenu } from '../ingrediente-en-menu';
import { IngredienteEnStock } from '../ingrediente-en-stock';
import { Menu } from '../menu';
import { RocketDeliveryService } from '../rocket-delivery.service';

@Component({
  selector: 'app-agregar-menu',
  templateUrl: './agregar-menu.component.html',
  styleUrls: ['./agregar-menu.component.css']
})
export class AgregarMenuComponent {

  menu: Menu;
  ingredientes: Ingrediente[];

  constructor(
    private rocketDeliveryService: RocketDeliveryService,
    private router: Router
  ) {
    this.menu = Menu.buildDefault();
  }

  ngOnInit(): void {
    this.listarStock();
  }

  listarStock() {
    this.rocketDeliveryService.getIngredientes().subscribe(data => {
      this.ingredientes = data;
      this.ingredientes.forEach(ingrediente => {
        ingrediente.cantidadStock = 0;
        ingrediente.disponible = false;
      });
    });
  }

  agregarMenu(): void {
    this.ingredientes.forEach(ingrediente => {
      if (ingrediente.disponible) {
        let ingredienteEnStock = new IngredienteEnStock();
        ingredienteEnStock.idIngredienteStock = ingrediente.idIngredienteStock;

        let ingredientesEnMenu = new IngredienteEnMenu();
        ingredientesEnMenu.cantidad = ingrediente.cantidadStock;
        ingredientesEnMenu.ingredienteEnStock = ingredienteEnStock;

        this.menu.ingredientesEnMenu.push(ingredientesEnMenu);
      }
    });

    this.rocketDeliveryService.agregarMenu(this.menu).subscribe({
      next: (data) => {
        if (data.includes('CREADO')) {
          this.router.navigate(['/menu']);
        } else {
          alert(data);
        }
      },
      error: (e) => {
        console.error('Error actualizando ingrediente: ' + e.message);
      },
      complete: () => console.info('fin')
    });
  }

}

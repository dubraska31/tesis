import { Component } from '@angular/core';
import { Ingrediente } from '../ingrediente';
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
    private rocketDeliveryService: RocketDeliveryService
  ) {
    this.menu = Menu.buildDefault();
  }

  ngOnInit(): void {
    this.listarStock();
  }

  agregarMenu(): void {
    this.rocketDeliveryService.agregarMenu(this.menu).subscribe();
  }

  listarStock() {
    this.rocketDeliveryService.getIngredientes().subscribe(data => {
      this.ingredientes = data;
    });
  }

}

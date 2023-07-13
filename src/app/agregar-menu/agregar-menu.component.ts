import { Component } from '@angular/core';
import { Menu } from '../menu';
import { RocketDeliveryService } from '../rocket-delivery.service';

@Component({
  selector: 'app-agregar-menu',
  templateUrl: './agregar-menu.component.html',
  styleUrls: ['./agregar-menu.component.css']
})
export class AgregarMenuComponent {

  menu: Menu;

  constructor(
    private rocketDeliveryService: RocketDeliveryService
  ) {
    this.menu = Menu.buildDefault();
  }

  agregarMenu(): void {
    console.log("this.menu.nombreMenu: " + this.menu.nombreMenu);
    console.log("this.menu.descripcion_menu: " + this.menu.descripcion_menu);

    this.rocketDeliveryService.agregarMenu(this.menu).subscribe();
  }

}

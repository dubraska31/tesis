import { Component } from '@angular/core';
import { Hero } from '../hero';
import { Menu } from '../menu';
import { RocketDeliveryService } from '../rocket-delivery.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  comidas: Hero[] = [];
  menus: Menu[] = [];

  constructor(
    private rocketDeliveryService: RocketDeliveryService
  ) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(): void {
    this.rocketDeliveryService.getMenus().subscribe((menus) => (this.menus = menus));
  }

  eliminarMenu(idMenu: number): void {
    const confirmation = window.confirm('¿Desea eliminar el menú?');

    if (confirmation) {
      this.rocketDeliveryService.eliminarMenu(idMenu).subscribe({
        next: (data) => {
          if (data.includes('No se puede eliminar el menu')) {
            alert(data);
          } else {
            this.getMenus();
          }
        },
        error: (e) => {
          console.error('error: ' + e.message);
        },
        complete: () => console.info('Menu eliminado')
      });
    }
  }

}

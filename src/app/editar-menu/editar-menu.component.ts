import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu';
import { RocketDeliveryService } from '../rocket-delivery.service';

@Component({
  selector: 'app-editar-menu',
  templateUrl: './editar-menu.component.html',
  styleUrls: ['./editar-menu.component.css']
})
export class EditarMenuComponent {

  menu: Menu;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rocketDeliveryService: RocketDeliveryService
  ) {
    this.menu = Menu.buildDefault();
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.rocketDeliveryService.getMenuById(id).subscribe((data: Menu) => {
      this.menu = data;
    });
  }

  //edita menu
  editarMenu(menu: Menu): void {
    this.rocketDeliveryService.editarMenu(menu).subscribe({
      next: () => {
        this.router.navigate(['/menu']);
      },
      error: (e) => {
        console.error('Error actualizando menu: ' + e.message);
      },
      complete: () => console.info('Menu actualizado')
    });
  }

}

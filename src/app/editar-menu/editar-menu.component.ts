import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { Ingrediente } from '../ingrediente';

@Component({
  selector: 'app-editar-menu',
  templateUrl: './editar-menu.component.html',
  styleUrls: ['./editar-menu.component.css']
})
export class EditarMenuComponent {

  menu: Menu;
  ingredientes: Ingrediente[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rocketDeliveryService: RocketDeliveryService
  ) {
    this.menu = Menu.buildDefault();
    //this.ingredientes = Ingrediente.buildDefault();
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.rocketDeliveryService.getMenuById(id).subscribe((data: Menu) => {

      this.menu = data;
      this.listarStock();
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

  //trae los ingredienets
  listarStock() {
    this.rocketDeliveryService.getIngredientes().subscribe(data => {
      this.ingredientes = data;
      this.ingredientes.forEach(ingrediente => {
        ingrediente.cantidadStock = 0;
        ingrediente.disponible = false;
      });
    });
  }

}

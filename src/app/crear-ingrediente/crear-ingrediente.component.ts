import { Component } from '@angular/core';
import { Ingrediente } from '../ingrediente';

import { Router } from '@angular/router';
import { RocketDeliveryService } from '../rocket-delivery.service';

@Component({
  selector: 'app-crear-ingrediente',
  templateUrl: './crear-ingrediente.component.html',
  styleUrls: ['./crear-ingrediente.component.css']
})
export class CrearIngredienteComponent {

  ingrediente: Ingrediente;

  constructor(
    private router: Router,
    private rocketDeliveryService: RocketDeliveryService
  ) {
    this.ingrediente = Ingrediente.buildDefault();
  }

  agregarIngrediente(): void {

    this.rocketDeliveryService.crearIngrediente(this.ingrediente).subscribe();
    this.router.navigate(['/ingredientes']);
  }
}

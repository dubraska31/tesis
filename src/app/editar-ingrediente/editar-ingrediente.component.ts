import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { Ingrediente } from '../ingrediente';

@Component({
  selector: 'app-editar-ingrediente',
  templateUrl: './editar-ingrediente.component.html',
  styleUrls: ['./editar-ingrediente.component.css']
})
export class EditarIngredienteComponent {
  ingrediente: Ingrediente;

  constructor(
    private router: Router,
    private rocketDeliveryService: RocketDeliveryService
  ) {
    this.ingrediente = Ingrediente.buildDefault();
  }

  editarIngrediente(ingrediente: Ingrediente): void {
    this.rocketDeliveryService.editarIngrediente(ingrediente).subscribe(
      () => {
        console.info('Ingredient updated');
        this.router.navigate(['/ingredientes']);
      },
      (error) => {
        console.error('Error updating ingredient:', error);
      }
    );
  }








}

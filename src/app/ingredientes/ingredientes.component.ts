import { Component } from '@angular/core';
import { Ingrediente } from '../ingrediente';
import { RocketDeliveryService } from '../rocket-delivery.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent {

  ingrediente: Ingrediente[] = [];

  constructor(
    private rocketDeliveryService: RocketDeliveryService
  ) { }

  ngOnInit(): void {
    this.getIngredientes();
  }

  getIngredientes(): void {
    this.rocketDeliveryService.getIngredientes()
      .subscribe((ingrediente) => (this.ingrediente = ingrediente));
  }


  eliminarIngrediente(idIngredienteStock: number): void {
    const confirmarEliminacion = window.confirm('¿Desea eliminar el ingrediente?');

    if (confirmarEliminacion) {
      this.rocketDeliveryService.eliminarIngrediente(idIngredienteStock)
        .subscribe(() => {
          // Actualizar la lista de ingredientes después de eliminar exitosamente
          this.getIngredientes();
        }, (error) => {
          // Manejar el error en caso de que ocurra
          console.error('Error al eliminar ingrediente:', error);
        });
    }
  }



}

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
  currentPage = 1;
  itemsPerPage = 5;

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
          this.getIngredientes(); // Update the ingredients list after successful deletion
        }, (error) => {
          console.error('Error al eliminar ingrediente:', error);
        });
    }
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  getPaginatedIngredientes(): Ingrediente[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.ingrediente.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getTotalPages(): number {
    return Math.ceil(this.ingrediente.length / this.itemsPerPage);
  }
}

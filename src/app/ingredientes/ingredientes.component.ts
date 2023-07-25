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

}

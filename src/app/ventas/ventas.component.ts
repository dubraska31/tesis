import { Component } from '@angular/core';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { Venta } from '../venta';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  ventas: Venta[] = [];

  constructor(
    private rocketDeliveryService: RocketDeliveryService
  ) { }

  ngOnInit(): void {
    this.getVentas();
  }

  getVentas(): void {
    this.rocketDeliveryService.getVentas()
      .subscribe((ventas) => (this.ventas = ventas));
  }

}

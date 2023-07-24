import { Component } from '@angular/core';
import { RocketDeliveryService } from '../rocket-delivery.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {

  constructor(
    private rocketDeliveryService: RocketDeliveryService
  ) { }

}

import { Component, OnInit } from '@angular/core';
import { DetalleOrden } from '@app/shared/interfaces/detalleorden.interface';
import { Platillo } from '@app/shared/interfaces/platillo.interface';
import { PlatillosService } from '@app/shared/service/platillos.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.sass']
})
export class PayComponent implements OnInit {
  public carrito: Array<DetalleOrden> = this.platilloServ.getCart();

  constructor(private platilloServ: PlatillosService) { }

  ngOnInit(): void {
  }

}

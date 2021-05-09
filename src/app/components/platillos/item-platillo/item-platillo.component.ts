import { Component, Input, OnInit } from '@angular/core';
import { DetalleOrden } from '@app/shared/interfaces/detalleorden.interface';
import { Platillo } from '@app/shared/interfaces/platillo.interface';
import { CarritoService } from '@app/shared/service/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-platillo',
  templateUrl: './item-platillo.component.html',
  styleUrls: ['./item-platillo.component.sass']
})
export class ItemPlatilloComponent implements OnInit {
  @Input() platillo: Platillo = new Platillo();

  constructor(private carritoServ: CarritoService) { }

  ngOnInit(): void {
  }

  agregarPlatillo(): void {
    const detail = new DetalleOrden();
    detail.cantidad = 1;
    detail.platillo = this.platillo;
    this.carritoServ.addCart(detail);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Agrego 1 ${this.platillo.nombre} a su orden`,
      showConfirmButton: false,
      timer: 1500
    });
  }

}

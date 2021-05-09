import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleOrden } from '@app/shared/interfaces/detalleorden.interface';
import { CarritoService } from '@app/shared/service/carrito.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.sass']
})
export class PayComponent implements OnInit {
  public carrito: Array<DetalleOrden> = this.carritoServ.getCart();
  public total = this.carritoServ.total;

  constructor(
    private carritoServ: CarritoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  reduce(detalle: DetalleOrden): void {
    this.total = this.carritoServ.reduceCart(detalle);
  }
  increment(detalle: DetalleOrden): void {
    this.total = this.carritoServ.addCart(detalle);
  }

  payFood(): void {
    Swal.fire({
      title: '<h2 class="sweetalert2-custom-title">¿Eso es todo?</h2>',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '<h3>Si, es todo</h3>',
      cancelButtonText: '<h3>Aun no</h3>',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "<h2 class='sweetalert2-custom-title'>Felicidades, acaba de hacer una compra ficticia :')</h2>",
          icon: 'success',
          confirmButtonText: '<h3>Cerrar</h3>',
        }).then(() => {
          if (result.isConfirmed) {
            this.total = this.carritoServ.deleteCart();
            this.router.navigate(['']);
          }
        });
      }
    });
  }

}

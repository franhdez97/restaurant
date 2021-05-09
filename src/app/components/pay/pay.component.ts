import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleOrden } from '@app/shared/interfaces/detalleorden.interface';
import { CarritoService } from '@app/shared/service/carrito.service';
import { ToastrService } from 'ngx-toastr';

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
    private toast: ToastrService,
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
    this.toast.success('Hizo una compra ficticiosa :)', 'Felicidades');
    this.total = this.carritoServ.deleteCart();

    this.router.navigate(['']);
  }

}

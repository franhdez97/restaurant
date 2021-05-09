import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleOrden } from '@app/shared/interfaces/detalleorden.interface';
import { Platillo } from '@app/shared/interfaces/platillo.interface';
import { CarritoService } from '@app/shared/service/carrito.service';
import { PlatillosService } from '@app/shared/service/platillos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-platillo',
  templateUrl: './lista-platillo.component.html',
  styleUrls: ['./lista-platillo.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaPlatilloComponent implements OnInit {
  public opcion = '';
  public platillos = this.platillosServ.listaPlatillos$;

  // para las cantidades
  public cantidad: Array<number> = [];
  // Para los filtros de busqueda
  public filtro = '';

  // Para la paginacion
  page = 1;

  constructor(
    private route: ActivatedRoute,
    private platillosServ: PlatillosService,
    private carritoServ: CarritoService
  ) {
    this.route.url.subscribe(() => {
      this.page = 1;
      this.cantidad = [];

      this.opcion = this.route.snapshot.params?.category;
      this.platillosServ.getAllAPI(this.opcion);
    });
  }

  ngOnInit(): void {
    window.document.title = 'Restaurant | Menu';
  }

  public agregarPlatillo(platillo: Platillo, posicion: number): void {
    if (this.cantidad[posicion] > 0 && this.cantidad[posicion]) {
      const detail = new DetalleOrden();
      detail.cantidad = this.cantidad[posicion];
      detail.platillo = platillo;
      this.carritoServ.addCart(detail);
      this.cantidad[posicion] = 0;

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Agrego ${detail.cantidad} ${platillo.nombre}${detail.cantidad > 1 ? 's' : ''} a su orden`,
        showConfirmButton: false,
        timer: 1500
      });
    }
    else if (this.cantidad[posicion] <= 0) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Debe ingresar una cantidad valida`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  public filtrarLista(event: any): void {
    const palabra = event.target.value;

    palabra !== '' ? this.platillosServ.searchFoodAPI(palabra) : this.platillosServ.getAllAPI(this.opcion);
  }

}

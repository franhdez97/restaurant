import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleOrden } from '@app/shared/interfaces/detalleorden.interface';
import { Platillo } from '@app/shared/interfaces/platillo.interface';
import { CarritoService } from '@app/shared/service/carrito.service';
import { PlatillosService } from '@app/shared/service/platillos.service';
import { ToastrService } from 'ngx-toastr';

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
    private toast: ToastrService,
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
  }

  public agregarPlatillo(platillo: Platillo, posicion: number): void {
    if (this.cantidad[posicion] > 0 && this.cantidad[posicion]) {
      const detail = new DetalleOrden();
      detail.cantidad = this.cantidad[posicion];
      detail.platillo = platillo;
      this.carritoServ.addCart(detail);

      this.toast.success(`Agrego ${this.cantidad[posicion]} ordenes a su carrito`, 'Orden actualizada');
      this.cantidad[posicion] = 0;
    }
    else if (this.cantidad[posicion] <= 0) {
      this.toast.error('Intente con un numero mayor a 0', 'Numero invalido');
    }
  }

  public filtrarLista(event: any): void {
    const palabra = event.target.value;

    palabra !== '' ? this.platillosServ.searchFoodAPI(palabra) : this.platillosServ.getAllAPI(this.opcion);
  }

}

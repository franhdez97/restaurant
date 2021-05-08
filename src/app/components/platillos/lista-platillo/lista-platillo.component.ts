import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public cantidad: Array<number> = [];

  // Para la paginacion
  page = 1;

  constructor(
    private route: ActivatedRoute,
    private platillosServ: PlatillosService,
    private toast: ToastrService
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

  public agregarPlatillo(id: number, posicion: number): void {
    if (this.cantidad[posicion] > 0 && this.cantidad[posicion]) {
      this.toast.success(`Agrego ${this.cantidad[posicion]} ordenes a su carrito`, 'Orden actualizada');
      this.cantidad[posicion] = 0;
    }
    else if (this.cantidad[posicion] <= 0) {
      this.toast.error('Intente con un numero mayor a 0', 'Numero invalido');
    }
  }

}

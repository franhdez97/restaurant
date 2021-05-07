import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platillo } from '@app/shared/interfaces/platillo.interface';
import { PlatillosService } from '@app/shared/service/platillos.service';

@Component({
  selector: 'app-lista-platillo',
  templateUrl: './lista-platillo.component.html',
  styleUrls: ['./lista-platillo.component.sass']
})
export class ListaPlatilloComponent implements OnInit {
  public listaPlatillos: Platillo[] = [];

  constructor(
    private route: ActivatedRoute,
    private platillosServ: PlatillosService
  ) {
    this.route.url.subscribe(() => {
      this.getAllTheFood(this.route.snapshot.params?.category);
    });
  }

  ngOnInit(): void {
  }

  getAllTheFood(opcion: string): void {
    this.platillosServ.getAllAPI(opcion).subscribe(
      (pedidos: Platillo[]) => this.listaPlatillos = pedidos
    );
  }

  agregarPlatillo(): void {
    // code
  }

}

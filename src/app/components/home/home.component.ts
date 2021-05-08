import { Component, OnInit } from '@angular/core';
import { Platillo } from '@app/shared/interfaces/platillo.interface';
import { PlatillosService } from '@app/shared/service/platillos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public platillos = this.platillosServ.listaHome$;

  constructor(private platillosServ: PlatillosService) { }

  ngOnInit(): void {
    // Solicitud de API REST
    this.platillosServ.getFoodHome();
  }

}

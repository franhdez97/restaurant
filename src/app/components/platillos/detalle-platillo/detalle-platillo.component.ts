import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoreImages } from '@app/shared/interfaces/images.interface';
import { Platillo } from '@app/shared/interfaces/platillo.interface';
import { PlatillosService } from '@app/shared/service/platillos.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-platillo',
  templateUrl: './detalle-platillo.component.html',
  styleUrls: ['./detalle-platillo.component.sass']
})
export class DetallePlatilloComponent implements OnInit {
  public platillo: Observable<Platillo[]> = this.platillosServ.detallePlatillo$;
  public moreImages: Observable<MoreImages[]> = this.platillosServ.moreImages$;

  constructor(
    private route: ActivatedRoute,
    private platillosServ: PlatillosService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.platillosServ.getDetailAPI(this.route.snapshot.params?.id);
    this.platillosServ.getMoreImagesAPI(this.route.snapshot.params?.id);
  }

  public regresar(): void {
    this.location.back();
  }

}

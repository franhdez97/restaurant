import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoreImages } from '@app/shared/interfaces/images.interface';
import { Platillo } from '@app/shared/interfaces/platillo.interface';
import { PlatillosService } from '@app/shared/service/platillos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-platillo',
  templateUrl: './detalle-platillo.component.html',
  styleUrls: ['./detalle-platillo.component.sass']
})
export class DetallePlatilloComponent implements OnInit {
  public platillo: Observable<Platillo[]> = this.platillosServ.detallePlatillo$;
  public moreImages: Observable<MoreImages[]> = this.platillosServ.moreImages$;

  constructor(private route: ActivatedRoute, private platillosServ: PlatillosService) { }

  ngOnInit(): void {
    this.platillosServ.getDetailAPI(this.route.snapshot.params?.id);
    this.platillosServ.getMoreImages(this.route.snapshot.params?.id);
  }

}

import { Component, OnInit } from '@angular/core';
import { Platillo } from '@app/shared/interfaces/platillo.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public platillos: Array<Platillo> = [];

  constructor() { }

  ngOnInit(): void {
    const pla = new Platillo();
    pla.descripcion = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s';
    pla.id = 1;
    pla.imagen  = 'http://localhost/API_restaurant/images/ensaladas/ensalada_casa.jpg';
    pla.nombre = 'lorem ipsum';
    pla.precio = 2.50;

    this.platillos.push(pla);
    this.platillos.push(pla);
    this.platillos.push(pla);
    this.platillos.push(pla);
    this.platillos.push(pla);
    this.platillos.push(pla);
  }

}

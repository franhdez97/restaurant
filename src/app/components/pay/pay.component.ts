import { Component, OnInit } from '@angular/core';
import { Platillo } from '@app/shared/interfaces/platillo.interface';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.sass']
})
export class PayComponent implements OnInit {
  public carrito: Array<Platillo> = [];

  constructor() { }

  ngOnInit(): void {
  }

}

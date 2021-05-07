import { Component, Input, OnInit } from '@angular/core';
import { Platillo } from '@app/shared/interfaces/platillo.interface';

@Component({
  selector: 'app-item-platillo',
  templateUrl: './item-platillo.component.html',
  styleUrls: ['./item-platillo.component.sass']
})
export class ItemPlatilloComponent implements OnInit {
  @Input() platillo: Platillo = new Platillo();

  constructor() { }

  ngOnInit(): void {
  }

  agregarPlatillo(): void {
    // code
  }

}

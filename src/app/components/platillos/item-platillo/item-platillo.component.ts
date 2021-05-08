import { Component, Input, OnInit } from '@angular/core';
import { Platillo } from '@app/shared/interfaces/platillo.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-platillo',
  templateUrl: './item-platillo.component.html',
  styleUrls: ['./item-platillo.component.sass']
})
export class ItemPlatilloComponent implements OnInit {
  @Input() platillo: Platillo = new Platillo();

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  agregarPlatillo(): void {
    this.toast.success(`Agrego "${this.platillo.nombre}" a su carrito`, 'Orden actualizada');
  }

}

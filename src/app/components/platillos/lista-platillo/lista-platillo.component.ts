import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-platillo',
  templateUrl: './lista-platillo.component.html',
  styleUrls: ['./lista-platillo.component.sass']
})
export class ListaPlatilloComponent implements OnInit {
  opcion = '';

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(() => {
      this.opcion = this.route.snapshot.params?.category;
    });
  }

  ngOnInit(): void {
  }

}

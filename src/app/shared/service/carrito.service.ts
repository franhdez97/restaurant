import { Injectable } from '@angular/core';
import { DetalleOrden } from '../interfaces/detalleorden.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  public total = 0;
  public carrito: Array<DetalleOrden> = [];

  constructor() { }

  // Para saber el total de la orden
  private obtenerTotal(): number {
    this.total = 0;

    this.carrito.map(
      (value: DetalleOrden) => this.total += value.cantidad * value.platillo.precio
    );

    return this.total;
  }

  // Eliminar y borrar
  public addCart(detalle: DetalleOrden): number {
    const index = this.exists(detalle);
    index === -1 ? this.carrito.push(detalle) : this.carrito[index].cantidad += 1;

    return this.obtenerTotal();
  }
  public reduceCart(detalle: DetalleOrden): number {
    const index = this.exists(detalle);

    if (index === -1) {
      this.carrito.push(detalle);
    }
    else {
      this.carrito[index].cantidad -= 1;
      if (this.carrito[index].cantidad === 0) {
        this.deleteItemCart(this.carrito[index]);
      }
    }

    return this.obtenerTotal();
  }
  // Eliminar definitivamente un elemento
  private deleteItemCart(detalle: DetalleOrden): number {
    const i = this.exists(detalle);
    if ( i !== -1 ) {
      this.carrito.splice(i, 1);
    }

    return this.obtenerTotal();
  }
  // Eliminar definitivamente el carrito
  public deleteCart(): number {
    this.carrito = [];
    return this.obtenerTotal();
  }

  // Obtiene el carrito
  public getCart(): Array<DetalleOrden> {
    return this.carrito;
  }
  // Verifica si existe ese elemento
  private exists(detalle: DetalleOrden): number {
    return this.carrito.findIndex(d => detalle.platillo.id === d.platillo.id);
  }
}

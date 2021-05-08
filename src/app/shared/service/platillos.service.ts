import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platillo } from '../interfaces/platillo.interface';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DetalleOrden } from '../interfaces/detalleorden.interface';

const URL = 'http://localhost/API_restaurant/platillos';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {
  private carrito: Array<DetalleOrden>;

  public listaPlatillosSubject = new BehaviorSubject<Platillo[]>([]);
  public listaPlatillos$ = this.listaPlatillosSubject.asObservable();

  public listaHomeSubject = new BehaviorSubject<Platillo[]>([]);
  public listaHome$ = this.listaHomeSubject.asObservable();

  constructor(private http: HttpClient) {
    this.carrito = [];
  }

  // Para el listado de platillos segun categoria
  public getAllAPI(category: string): void {
    this.http.get<Platillo[]>(`${URL}/getAll.php?category=${category}`).pipe(
      map((res: Platillo[]) => this.listaPlatillosSubject.next(res))
    ).subscribe();
  }
  // Para el home
  public getFoodHome(): void {
    this.http.get<Platillo[]>(`${URL}/getHome.php`).pipe(
      map((res: Platillo[]) => this.listaHomeSubject.next(res))
    ).subscribe();
  }

  // Para saber el total de la orden
  public addCart(detalle: DetalleOrden): void {
    const index = this.exists(detalle);

    index === -1 ? this.carrito.push(detalle) : this.carrito[index].cantidad += 1;
  }
  public deleteCart(detalle: DetalleOrden): void {
    const i = this.exists(detalle);
    if ( i !== -1 ) {
      this.carrito.splice(i, 1);
    }
  }
  public getCart(): Array<DetalleOrden> {
    return this.carrito;
  }

  private exists(detalle: DetalleOrden): number {
    return this.carrito.findIndex(d => detalle.platillo.id === d.platillo.id);
  }
}

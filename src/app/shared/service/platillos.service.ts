import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platillo } from '../interfaces/platillo.interface';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DetalleOrden } from '../interfaces/detalleorden.interface';
import { MoreImages } from '../interfaces/images.interface';

const URL = 'http://localhost/API_restaurant/platillos';
const carrito: Array<DetalleOrden> = [];

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {
  // Para el menu
  public listaPlatillosSubject = new BehaviorSubject<Platillo[]>([]);
  public listaPlatillos$ = this.listaPlatillosSubject.asObservable();

  // Para el home
  public listaHomeSubject = new BehaviorSubject<Platillo[]>([]);
  public listaHome$ = this.listaHomeSubject.asObservable();

  // Para el detalle
  public detallePlatilloSubject = new BehaviorSubject<Platillo[]>([]);
  public detallePlatillo$ = this.detallePlatilloSubject.asObservable();

  // Para mas imagenes
  public imagesSubject = new BehaviorSubject<MoreImages[]>([]);
  public moreImages$ = this.imagesSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  // Para el listado de platillos segun categoria
  public getAllAPI(category: string): void {
    this.http.get<Platillo[]>(`${URL}/getAll.php?category=${category}`).pipe(
      map( (res: Platillo[]) => this.listaPlatillosSubject.next(res) )
    ).subscribe();
  }
  // Para el home
  public getHomeAPI(): void {
    this.http.get<Platillo[]>(`${URL}/getHome.php`).pipe(
      map( (res: Platillo[]) => this.listaHomeSubject.next(res) )
    ).subscribe();
  }
  // Para el detalle
  public getDetailAPI(id: number): void {
    this.http.get<Platillo[]>(`${URL}/getDetail.php?id=${id}`).pipe(
      map( (res: Platillo[]) => this.detallePlatilloSubject.next(res) )
    ).subscribe();
  }
  // Para mas imagenes
  public getMoreImages(id: number): void {
    this.http.get<MoreImages[]>(`${URL}/getImages.php?id=${id}`).pipe(
      map( (res: MoreImages[]) => this.imagesSubject.next(res) )
    ).subscribe();
  }

  // Para saber el total de la orden
  public addCart(detalle: DetalleOrden): void {
    const index = this.exists(detalle);

    index === -1 ? carrito.push(detalle) : carrito[index].cantidad += 1;
  }
  public deleteCart(detalle: DetalleOrden): void {
    const i = this.exists(detalle);
    if ( i !== -1 ) {
      carrito.splice(i, 1);
    }
  }
  public getCart(): Array<DetalleOrden> {
    return carrito;
  }

  private exists(detalle: DetalleOrden): number {
    return carrito.findIndex(d => detalle.platillo.id === d.platillo.id);
  }
}

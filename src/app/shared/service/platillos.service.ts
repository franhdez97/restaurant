import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platillo } from '../interfaces/platillo.interface';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MoreImages } from '../interfaces/images.interface';

const URL = 'http://localhost/API_restaurant/platillos';

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
  // Para el home (Obtiene 6 platillos al azar)
  public getHomeAPI(): void {
    this.http.get<Platillo[]>(`${URL}/getHome.php`).pipe(
      map( (res: Platillo[]) => this.listaHomeSubject.next(res) )
    ).subscribe();
  }
  // Para el detalle (segun el platillo)
  public getDetailAPI(id: number): void {
    this.http.get<Platillo[]>(`${URL}/getDetail.php?id=${id}`).pipe(
      map( (res: Platillo[]) => this.detallePlatilloSubject.next(res) )
    ).subscribe();
  }
  // Para mas imagenes (Obtiene todas las imagenes de una comida)
  public getMoreImagesAPI(id: number): void {
    this.http.get<MoreImages[]>(`${URL}/getImages.php?id=${id}`).pipe(
      map( (res: MoreImages[]) => this.imagesSubject.next(res) )
    ).subscribe();
  }
  // Para obtener un listado filtrado de la comida
  public searchFoodAPI(filter: string): void {
    this.http.get<Platillo[]>(`${URL}/searchFood.php?query=${filter}`).pipe(
      map( (res: Platillo[]) => this.listaPlatillosSubject.next(res) )
    ).subscribe();
  }
}

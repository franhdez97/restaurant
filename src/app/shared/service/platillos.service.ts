import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platillo } from '../interfaces/platillo.interface';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const URL = 'http://localhost/API_restaurant/platillos';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  public listaPlatillosSubject = new BehaviorSubject<Platillo[]>([]);
  public listaPlatillos$ = this.listaPlatillosSubject.asObservable();

  constructor(private http: HttpClient) { }

  public getAllAPI(category: string): void {
    this.http.get<Platillo[]>(`${URL}/getAll.php?category=${category}`).pipe(
      map((res: Platillo[]) => this.listaPlatillosSubject.next(res))
    ).subscribe();
  }
}

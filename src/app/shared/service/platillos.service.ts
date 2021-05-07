import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Platillo } from '../interfaces/platillo.interface';

const URL = 'http://localhost/API_restaurant/platillos';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor(private http: HttpClient) { }

  public getAllAPI(category: string): Observable<Platillo[]> {
    return this.http.get<Platillo[]>(`${URL}/getAll.php?category=${category}`).pipe(
      map((res: Platillo[]) => {
        return res;
      })
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl: string = environment.apiUrl;
  private limit: number = 6;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.apiUrl);
  }

  infoHeroe(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.apiUrl}/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.apiUrl}?q=${termino}&_limit=${this.limit}`);
  }
}

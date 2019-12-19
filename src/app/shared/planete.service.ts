import { Planete } from './planete';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaneteService {
  public url = '../../assets/data/sysp_planets.json';
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planete[]> {
    return this.http.get<Planete[]>(this.url);
  }
}

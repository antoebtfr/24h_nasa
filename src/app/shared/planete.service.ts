import { Planete } from './planete';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaneteService {
  public url = '../../assets/data/sysp_planets.json';
  public url2 = '../../assets/data/outer-milkway.json';
  constructor(private http: HttpClient) { }

  getPlanetsSysSol(): Observable<Planete[]> {
    return this.http.get<Planete[]>(this.url);
  }

  getPlanetOutMilkWay(): Observable<Planete[]> {
    return this.http.get<Planete[]>(this.url2);
  }
}

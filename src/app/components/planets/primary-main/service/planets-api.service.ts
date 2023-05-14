import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {Planet, Planets} from "./planets.model";

@Injectable({
  providedIn: 'root'
})
export class PlanetsApiService {
  header = new HttpHeaders({
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com',
    'X-RapidAPI-Key': 'd681db5d4fmshcd6ce907b147090p148cabjsn739477bd3af0'
  })
  url = `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/`

  constructor(
    private http: HttpClient) {
  }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.url, {headers: this.header})
  }

  getOnePlanet(id: number): Observable<Planets> {
    return this.http.get<Planets>(`${this.url}${id}`, {headers: this.header})
  }
}

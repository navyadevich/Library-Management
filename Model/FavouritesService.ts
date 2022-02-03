import { Observable } from "rxjs";
import { Favourites } from 'src/app/Model/Favourites';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Fav } from "src/app/Model/Fav";

@Injectable
  ({
    providedIn: 'root'
  })

export class FavouritesService {
  baseUrl = 'https://localhost:7232/api/Favourites';
  baseUrl1 = 'https://localhost:7232/Fav';
  subscribe(arg0: (data: any) => void) {
    throw new Error('Method not implemented');
  }

  constructor(private http: HttpClient) { }

  makeFav(favourite: Favourites): Observable<Favourites> {
    return this.http.post<Favourites>('https://localhost:7232/api/Favourites', favourite, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }
  getfavVideos(): Observable<Favourites[]> {
    return this.http.get<Favourites[]>('https://localhost:7232/api/Favourites')
  }

  getFavouritesbyid(id: string): Observable<Favourites[]> {
    return this.http.get<Fav[]>(`${this.baseUrl1}/${id}`)

  }
  deleteFavourite(id: string, iVideoId: number): Observable<Favourites[]> {
    return this.http.delete<Fav[]>(`${this.baseUrl1}/${id}/${iVideoId}`);
  }
 
  addfavtable(fav: Fav): Observable<Fav> {
    return this.http.post<Fav>('https://localhost:7232/Fav', fav, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
 
}

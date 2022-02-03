import { Observable } from "rxjs";
import { VideoLibrary } from 'src/app/Model/VideoLibrary';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Fav } from "./Fav";
import { Favourites } from "./Favourites";

@Injectable
  ({
    providedIn: 'root'
  })

export class VideoLibraryService {
  baseUrl = 'https://localhost:7232/api/VideoLibrary';
  subscribe(arg0: (data: any) => void) {
    throw new Error('Method not implemented');
  }

  constructor(private http: HttpClient) { }


  getVideos(): Observable<VideoLibrary[]> {
    return this.http.get<VideoLibrary[]>('https://localhost:7232/api/VideoLibrary')
  }
  addVideo(video: VideoLibrary): Observable<VideoLibrary> {
    return this.http.post<VideoLibrary>('https://localhost:7232/api/VideoLibrary', video, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  addFavourites(favs: Favourites): Observable<Favourites> {
    return this.http.post<Favourites>('https://localhost:7232/Fav', favs, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }

  deleteVideo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

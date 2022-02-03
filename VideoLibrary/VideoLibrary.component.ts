import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoLibrary } from 'src/app/Model/VideoLibrary';
import { VideoLibraryService } from 'src/app/Model/VideoLibraryService';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Fav } from '../../app/Model/Fav';
import { Favourites } from '../../app/Model/Favourites';
import { FavouritesService } from '../Model/FavouritesService';
import { IVideo } from '../Model/IVideo';

@Component({
  selector: 'list-VideoLibrary',
  templateUrl: './VideoLibrary.component.html',
  styleUrls: ['./VideoLibrary.component.css']
})


export class VideoLibraryComponent implements OnInit {
  public videos: IVideo[] = [];
  mi: VideoLibrary = new VideoLibrary();
  errorMessage: String = "";
  public httpa: HttpClient;
  public fav: Fav = new Fav;
  username: string = '';
  @ViewChild('favouritesForm')
  public createfavouritesForm!: NgForm;

  public isAuthenticated?: Observable<boolean>;
  public userName?: Observable<string | null | undefined>;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private authorizeService: AuthorizeService, public sanitizer: DomSanitizer, private favService: FavouritesService, private_route: ActivatedRoute, private_router: Router, private emService: VideoLibraryService) {
    this.httpa = http;
    this.authorizeService.getUser().subscribe(val => this.username = (JSON.stringify(val && val.sub)).replace(/\"/g, ""));
    baseUrl = 'https://localhost:7232/api/';
    http.get<IVideo[]>(baseUrl + 'VideoLibrary').subscribe(result => {
      this.videos = result;
    }, error => console.error(error));
  }
  public addfavtable(id: number) {
    this.fav.id = this.username
    this.fav.iVideoId = id

    alert("Add to your favaourtites")
    this.favService.addfavtable(this.fav).subscribe((data: Fav) => {
      console.log(data);
    },
      (error: any) => console.log(error)
    );

  }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
    this.getVideosFromServer();
  }
  async getVideosFromServer() {
    this.emService.getVideos().subscribe((result) => (this.videos = result));
  }
}


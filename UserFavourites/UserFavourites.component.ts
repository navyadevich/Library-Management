import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoLibrary } from 'src/app/Model/VideoLibrary';
import { FavouritesService } from 'src/app/Model/FavouritesService';
import { Favourites } from 'src/app/Model/Favourites';

import { Fav } from '../../app/Model/Fav';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'list-UserFavourites',
  templateUrl: './UserFavourites.component.html',
  styleUrls: ['./UserFavourites.component.css']
})


export class UserFavouritesComponent implements OnInit {
  @ViewChild('favouritesForm')
  public createFavouritesForm!: NgForm;
  favs: Fav[] = [];
  fav: Fav = new Fav();

  public isAuthenticated?: Observable<boolean>;
  public userName?: Observable<string | null | undefined>;
  errorMessage: String = "";
  id: string = '';
  userid: string = '';

  constructor(private_route: ActivatedRoute,
    private _router: Router, private favouritesService: FavouritesService, public sanitizer: DomSanitizer,private authorizeService: AuthorizeService) { }

  ngOnInit() {
    this.authorizeService.getUser().subscribe(val => this.id = (JSON.stringify(val && val.name)).replace(/\"/g, ""));
    this.getFavouritesbyid(this.id);
    this.userid = this.id;
  }

  getFavouritesbyid(id: string) {
    this.favouritesService.getFavouritesbyid(this.id).subscribe((result: any[]) => (this.favs = result));
  }

  deleteFavouriteFromServer(id:string,iVideoId:number) {
    this.favouritesService.deleteFavourite(id, iVideoId).subscribe(result => this.getFavouritesbyid(this.id))     
  }



 

  
}

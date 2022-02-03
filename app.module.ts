import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { VideoLibraryComponent } from 'src/app/VideoLibrary/VideoLibrary.component';

//import { AddVideoComponent } from './AddVideo/AddVideo.component';
//import { FavouritesComponent } from '.src/app/Model/Favourites/Favourites.component';
import { UserFavouritesComponent } from 'src/app/UserFavourites/UserFavourites.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { AddFavsComponent } from './AddFavs/AddFavs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    VideoLibraryComponent,
    UserFavouritesComponent,
    PageNotFoundComponent
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: 'VideoLibrary', component: VideoLibraryComponent },
      { path: 'UserFavourites', component: UserFavouritesComponent },
      { path: '**', component: PageNotFoundComponent }
     
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

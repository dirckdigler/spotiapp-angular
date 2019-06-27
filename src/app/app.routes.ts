import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { ArtistComponent } from './components/artist/artist.component';
import { LoginComponent } from './components/login/login.component';
import { AlbumComponent } from './components/album/album.component';
import { LibraryComponent } from './components/library/myalbums/myalbums.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'account', component: UserComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'login', component: LoginComponent },
  { path: 'collection/album', component: LibraryComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

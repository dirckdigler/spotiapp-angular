import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-myalbums',
  templateUrl: './myalbums.component.html',
  styles: []
})
export class LibraryComponent {

  library: any[] = [];

  constructor( private http: HttpClient,
               private spotify: SpotifyService ) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.spotify.token }`,
    });

    this.http.get('https://api.spotify.com/v1/me/albums', { headers })
      .subscribe((data: any) => {
        this.library = data.items;
      });
  }

}

import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent {

  image: any[] = [];
  name:  any[] = [];
  web:   any[] = [];

  constructor( private http: HttpClient,
               private spotify: SpotifyService ) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.spotify.token }`,
    });

    this.http.get('https://api.spotify.com/v1/me', { headers })
      .subscribe((data: any) => {
        this.image = data.images[0].url;
        this.name = data.display_name;
        this.web = data.href;
      });
   }

}

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

  constructor( private http: HttpClient ) {
    // this.spotify.getUser();
    const headers = new HttpHeaders({
      'Authorization': `Bearer BQByqrsAWs5ejWtMBft3RNcRKD9yJQ-ueiYTybjfP5QSqiQAQ1N0qi98NZFQkCcAWA_5HCuI1Yny9X62wJM2v0SOo-a1zJlFbDQ-W8Ta_qi43kjmGCSkAXbDN76ktUxiCHDFltEmKStJw6LalidHEqZxhc4L`,
    });

    this.http.get('https://api.spotify.com/v1/me', { headers })
      .subscribe((data: any) => {
        this.image = data.images[0].url;
        this.name = data.display_name;
        this.web = data.href;
      });
   }

}

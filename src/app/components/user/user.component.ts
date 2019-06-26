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
      'Authorization': `Bearer BQDZMoLoeymVoMCtLh5-vs-NUHutG3jD9OwDEfPWoR6VD8zQgVyNSNfEQv6sPFDIIpl2DEWmmb3RqNKbvjMZh3CsmQRtL6MaiTrtEIh9IBp5NSOTQ22BKZVFYYGJeKBldL3XEEe5VqGCyPH8MqnXtmWzs9KC`,
    });

    this.http.get('https://api.spotify.com/v1/me', { headers })
      .subscribe((data: any) => {
        this.image = data.images[0].url;
        this.name = data.display_name;
        this.web = data.href;
      });
   }

}

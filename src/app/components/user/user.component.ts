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
      'Authorization': `Bearer BQBQQmBrZxssngzcQROZLCx3i-hommkXFjCGjadw78BCy-X2VqDwO1fx9dXUPqMEvsTR7nLDLHEKKYfvfVOiNVOgpPM5PN-6_p_0v3x9xAcFn1k8DT6JZHy1sOPzzCDLPOG4PdE_1R2GHPA`,
    });

    this.http.get('https://api.spotify.com/v1/me', { headers })
      .subscribe((data: any) => {
        this.image = data.images[0].url;
        this.name = data.display_name;
        this.web = data.href;
      });
   }

}

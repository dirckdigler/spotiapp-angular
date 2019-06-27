import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpotifyService } from '../../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myalbums',
  templateUrl: './myalbums.component.html',
  styles: []
})
export class LibraryComponent {

  library: any[] = [];

  constructor( private http: HttpClient ) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer BQBBtp-64K4b3Rw_qc-EbgdMYqPCVKYto-PsNHlj1m4nJtPYda9W2-PBfFe6559lMOIrRkNi8UV2GAXny1tNBer1GxmF1hJwSeU6JUni1OAVAonZUCXxvKkQqIo58R7Ve_uUkZnwVq4fJ8naFQW6bocznoMauShNcGxD`,
    });

    this.http.get('https://api.spotify.com/v1/me/albums', { headers })
      .subscribe((data: any) => {
        this.library = data;
        console.log(this.library);
      });
  }

}

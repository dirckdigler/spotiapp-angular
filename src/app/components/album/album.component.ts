import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: []
})
export class AlbumComponent {

  album: any = {};

  constructor( private spotify: SpotifyService,
               private router: ActivatedRoute ) {

    this.router.params.subscribe( params => {
      this.getAlbum( params['id'] );
    });
  }

  getAlbum( id: any ) {
    this.spotify.getAlbum(id)
      .subscribe(album => {
        this.album = album;
        console.log(album);
      });
  }
}

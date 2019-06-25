import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  loadingArtist: boolean;
  topTrack: any = {};
  nameTrack: any = {};
  discrography: any = {};
  typeAlbum: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService ) {

    this.loadingArtist = true;
    this.router.params.subscribe( params => {
      this.getArtist( params[ 'id' ] );
      this.getTopTracks( params[ 'id' ] );
      this.getDiscography(params['id']);
    });
  }

  getArtist( id: any ) {
    this.loadingArtist = true;
    this.spotify.getArtist( id )
      .subscribe( artist => {
        this.artist = artist;
        this.loadingArtist = false;
      });
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTrack( id )
      .subscribe( topTracks => {
        this.topTrack = topTracks;
      });
  }

  getDiscography(idArtist: string) {
    this.typeAlbum = false;
    this.spotify.getDiscography(idArtist)
      .subscribe(album => {
        this.discrography = album;
        console.log(this.discrography);
        this.discrography.forEach(function (element) {
          if ( element.album_type === 'album') {
            this.typeAlbum = true;
            console.log(this.typeAlbum);
          }
        });
      });
  }

}

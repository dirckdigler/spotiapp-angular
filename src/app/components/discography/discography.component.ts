import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styles: []
})
export class DiscographyComponent {

  discrography: any = {};

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService) {

    // this.router.params.subscribe(params => {
    //   this.getDiscography( params['id'] );
    // });
  }

  // getDiscography( idArtist: string ) {
  //   this.spotify.getDiscography( idArtist )
  //   .subscribe(album => {
  //     this.discrography = album;
  //     console.log(idArtist);
  //     console.log(this.discrography);
  //   });
  // }
}

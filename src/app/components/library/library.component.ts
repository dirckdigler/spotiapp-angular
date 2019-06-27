import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styles: []
})
export class LibraryComponent {


  constructor(private spotify: SpotifyService,
    private router: ActivatedRoute) {

  }

}

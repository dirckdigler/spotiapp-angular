import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  tokenSerive: any[] = [];
  myAlbum: any = {};
  token: any = 'BQByqrsAWs5ejWtMBft3RNcRKD9yJQ-ueiYTybjfP5QSqiQAQ1N0qi98NZFQkCcAWA_5HCuI1Yny9X62wJM2v0SOo-a1zJlFbDQ-W8Ta_qi43kjmGCSkAXbDN76ktUxiCHDFltEmKStJw6LalidHEqZxhc4L';

  constructor( private http: HttpClient ) {
    const endpoint = 'https://spotify-get-token.herokuapp.com/spotify/a489ec36708347ce8ba25672404d8be7/cb6e844df09a4cc0a75ef18198b4c2a0';

    this.http.get(endpoint).subscribe((token: any) => {
      this.tokenSerive = token.access_token;
      localStorage.setItem('token', JSON.stringify(this.tokenSerive));
    });
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    let token = JSON.parse( localStorage.getItem( 'token' ) );
    console.log(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ token }`,
    });

    return this.http.get(url, { headers });
  }

  putQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    });

    return this.http.put(url, '', { headers });

  }

  getNewRelease() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items ));
  }

  getArtists( term: string ) {
    return this.getQuery(`search?q=${ term }&type=artist&limit=20`)
      .pipe( map( data => data['artists'].items ));
  }

  getArtist( id: string ) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTrack( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
      .pipe( map( data => data['tracks'] ));
  }

  getAlbum( id: string ) {
    return this.getQuery(`albums/${id}`);
  }

  getDiscography( idArtist: string ) {
    return this.getQuery(`artists/${idArtist}/albums`)
      .pipe( map( data => data['items'] ));
  }

  myAlbums( idAlbum: string ) {
    return this.putQuery(`me/albums?ids=${idAlbum}`);
  }

}


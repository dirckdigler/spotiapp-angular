import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  tokenSerive: any[] = [];
  myAlbum: any = {};
  token: any = 'BQC6mLvJnPiwykHCyI8JGwgHg21k2QKpHZBjnvM0YlzG0mkZo_ahFmgDe_YiVoR0B0VPgVvqXFLtQOstwvpORjN7FyLfdLY-JYT2Gfj-0uy7daiQn_IjIcebn4H7mJoFipufah80syRoerQT17XS44ppvzqH';

  constructor( private http: HttpClient ) {
    const endpoint = 'https://spotify-get-token.herokuapp.com/spotify/a489ec36708347ce8ba25672404d8be7/cb6e844df09a4cc0a75ef18198b4c2a0';

    this.http.get(endpoint).subscribe((token: any) => {
      this.tokenSerive = token.access_token;
      localStorage.setItem('token', JSON.stringify(this.tokenSerive));
    });
    this.putQuery();

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

  putQuery( ) {
    const url = `https://api.spotify.com/v1/me/albums?ids=0el3EEf66jesDme98lUMCA`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    });

    this.http.put(url, '', { headers })
      .subscribe((data: any) => {
        console.log(data);
      });

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

  // myAlbums( idAlbum: string ) {
  //   return this.putQuery(`me/albums?ids=${idAlbum}`);
  // }
}


import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styles: []
})
export class LibraryComponent {

  image: any[] = [];
  name: any[] = [];
  web: any[] = [];

  constructor(private http: HttpClient) {

  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  login: string;

  constructor() {
    const endpoint = 'https://accounts.spotify.com/authorize?response_type=token&client_id=95930694d92442278573bdbd40134dad&scope=user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2F%23%2Finiciador%2Fcallback%2F&state=Bz0YqfWYc9eBLC2D';
    this.login = endpoint;
  }



}

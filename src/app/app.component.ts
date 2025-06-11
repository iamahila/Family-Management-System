import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-family';

  constructor(private authService: AuthService) {}

  onLogout(){
    this.authService.isLoggedOut();
  }

  onLogin(){
    this.authService.isLoggedIn();
  }
}

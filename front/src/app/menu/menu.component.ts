import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

//interface for type disconnect user function
interface Disconnect {
  connexion: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, DoCheck {
  public date: Date = new Date();
  public connected: boolean;

  constructor(private cookie: CookieService, private http: HttpClient) {}

  public deconnexion() {
    this.http
      .get<Disconnect>('http://localhost:3000/logout', {
        withCredentials: true,
      })
      .subscribe((response: Disconnect) => {
        this.connected = response.connexion;
      });
  }

  ngDoCheck() {
    this.connected = this.cookie.check('jwt');
  }

  ngOnInit(): void {
    this.connected = this.cookie.check('jwt');
  }
}

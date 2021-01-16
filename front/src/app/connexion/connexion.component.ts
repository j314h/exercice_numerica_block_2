import { Files } from './../models/File.interface';
import { User } from './../models/user.interface';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

//interface for type disconnect user function
interface Disconnect {
  connexion: boolean;
}

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent implements OnInit {
  public connected: Boolean;
  public user: User;
  public connexionUserForm: FormGroup;
  public profilImage: string;

  constructor(private cookie: CookieService, private http: HttpClient) {}

  public connexion() {
    this.http
      .post<User>(
        'http://localhost:3000/connexion',
        this.connexionUserForm.value,
        { withCredentials: true }
      )
      .subscribe((user: User) => {
        this.user = user;
        this.connected = this.cookie.check('jwt');
      });

    this.http
      .get<Files[]>('http://localhost:3000/files')
      .subscribe((files: Files[]) => {
        const imgProfil = files.find((el) => el.name === 'profil');
        this.profilImage =
          'http://localhost:3000/images/' + imgProfil.fieldName;
      });
  }

  public deconnexion() {
    this.http
      .get<Disconnect>('http://localhost:3000/logout', {
        withCredentials: true,
      })
      .subscribe((response: Disconnect) => {
        this.connected = response.connexion;
        this.user = null;
      });
  }

  ngOnInit(): void {
    this.connected = this.cookie.check('jwt');
    if (this.connected) {
      this.http
        .get<User>('http://localhost:3000/user', { withCredentials: true })
        .subscribe((user: User) => {
          this.user = user;
        });
      this.http
        .get<Files[]>('http://localhost:3000/files')
        .subscribe((files: Files[]) => {
          const imgProfil = files.find((el) => el.name === 'profil');
          this.profilImage =
            'http://localhost:3000/images/' + imgProfil.fieldName;
        });
    }
    this.connexionUserForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
}

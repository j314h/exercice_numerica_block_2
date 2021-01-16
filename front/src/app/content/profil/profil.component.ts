import { Files } from './../../models/File.interface';
import { Component, OnInit } from '@angular/core';
import { Profil } from './../../models/profil.interface';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  public profil: Profil;
  public imgProfil: FormData;
  public profilImage: string;
  public areaProfil: FormGroup;
  public connected: Boolean;
  public infoUpdateProfil: string;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  //update text for profil in api
  public updateProfil() {
    this.http
      .post<Profil>(
        'http://localhost:3000/update-profil',
        this.areaProfil.value,
        { withCredentials: true }
      )
      .subscribe((profil: Profil) => {
        this.profil = profil;
        this.initForm(this.profil);
        this.infoUpdateProfil = 'Update ok';
      });
    setTimeout(() => {
      this.infoUpdateProfil = '';
    }, 4000);
  }

  //load image in formData format
  public loadImg(file) {
    console.log('ProfilComponent ~ loadImg ~ file', file);
    this.imgProfil = new FormData();
    this.imgProfil.append('profil', file);
    console.log(
      'ProfilComponent ~ loadImg ~ this.imgProfil',
      this.imgProfil.get('profil')
    );
  }

  //upload and update image profil
  public updateImgProfil() {
    this.http
      .post<any>('http://localhost:3000/file/profil', this.imgProfil, {
        withCredentials: true,
      })
      .subscribe((response: any) => {
        this.profilImage = 'http://localhost:3000/images/' + response.fieldName;
      });
  }

  //init form for update profil, execute in ngOnInit
  public initForm(profil: Profil) {
    this.areaProfil = new FormGroup({
      _id: new FormControl(profil._id),
      textPrincipal: new FormControl(profil.textPrincipal),
      textSecondaire: new FormControl(profil.textSecondaire),
      textConclusion: new FormControl(profil.textConclusion),
    });
  }

  ngOnInit(): void {
    //get info in profil data base
    this.http
      .get<Profil[]>('http://localhost:3000/info-profil')
      .subscribe((profil: Profil[]) => {
        this.profil = profil[0];
        this.initForm(this.profil);
      });

    this.http
      .get<Files[]>('http://localhost:3000/files')
      .subscribe((files: Files[]) => {
        const imgProfil = files.find((el) => el.name === 'profil');
        this.profilImage =
          'http://localhost:3000/images/' + imgProfil.fieldName;
      });

    //check if user is connected
    this.connected = this.cookie.check('jwt');
    //this.connected = true;
  }
}

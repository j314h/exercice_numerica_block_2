import { Files } from './../../models/File.interface';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Profil } from './../../models/profil.interface';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit, DoCheck {
  public profil: Profil;
  public imgProfil: FormData;
  public cv: FormData;
  public profilImage: string;
  public profilCv: SafeResourceUrl;
  public areaProfil: FormGroup;
  public connected: Boolean;
  public infoUpdateProfil: string;
  public infoUpdateImage: string;
  public infoUpdateCv: string;
  public seeCv: Boolean = false;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private urlSecur: DomSanitizer
  ) {}

  //load cv in formData format
  public loadCV(file) {
    this.cv = new FormData();
    this.cv.append('cv', file);
  }

  //upload and update cv profil
  public updateCv() {
    this.http
      .post<any>('http://localhost:3000/file/cv', this.cv, {
        withCredentials: true,
      })
      .subscribe((response: any) => {
        this.profilCv = 'http://localhost:3000/images/' + response.fieldName;
        this.infoUpdateCv = 'Update ok';
      });
    setTimeout(() => {
      this.infoUpdateCv = '';
    }, 4000);
  }

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
    this.imgProfil = new FormData();
    this.imgProfil.append('profil', file);
  }

  //upload and update image profil
  public updateImgProfil() {
    this.http
      .post<any>('http://localhost:3000/file/profil', this.imgProfil, {
        withCredentials: true,
      })
      .subscribe((response: any) => {
        this.profilImage = 'http://localhost:3000/images/' + response.fieldName;
        this.infoUpdateImage = 'Update ok';
      });
    setTimeout(() => {
      this.infoUpdateImage = '';
    }, 4000);
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

  public seeForCv() {
    this.seeCv = !this.seeCv;
  }

  ngDoCheck() {
    this.connected = this.cookie.check('jwt');
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
        const cvProfil = files.find((el) => el.name === 'cv');
        this.profilImage =
          'http://localhost:3000/images/' + imgProfil.fieldName;
        this.profilCv = this.urlSecur.bypassSecurityTrustResourceUrl(
          'http://localhost:3000/images/' + cvProfil.fieldName
        );
      });

    //check if user is connected
    this.connected = this.cookie.check('jwt');
    //this.connected = true;
  }
}

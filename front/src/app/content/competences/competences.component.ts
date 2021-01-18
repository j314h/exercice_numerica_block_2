import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl } from '@angular/forms';
import { Competence } from '../../models/competence.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit, DoCheck {
  public competences: Competence[];
  public connected: boolean;
  public competenceFormGroupe: FormGroup;
  public listCompetenceFormGroupe: Array<FormGroup> = [];
  public listFiles: FormData;
  public imgsDelete: string;
  public create: Boolean;
  public titleBtnCreate: string = '';

  //new competence
  public newCompetenceFormGroup: FormGroup;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  public deleteCompetence(id: string) {
    this.http
      .get<Competence[]>(`http://localhost:3000/delete-competence/${id}`, {
        withCredentials: true,
      })
      .subscribe((competencesList: Competence[]) => {
        this.listCompetenceFormGroupe = [];
        this.competences = [];
        this.competences = competencesList;
        if (this.connected) {
          for (const item of this.competences) {
            this.competenceFormGroupe = new FormGroup({
              _id: new FormControl(item._id),
              title: new FormControl(item.title),
              text: new FormControl(item.text),
              imgs: new FormControl(item.imgs),
            });
            this.listCompetenceFormGroupe.push(this.competenceFormGroupe);
          }
        }
        this.listFiles = null;
        Swal.fire('OK', 'Compétence supprimée', 'success');
      });
  }

  public createCompetence() {
    this.http
      .post<Competence[]>(
        'http://localhost:3000/create-competence',
        this.newCompetenceFormGroup.value,
        {
          withCredentials: true,
        }
      )
      .subscribe((competencesList: Competence[]) => {
        this.listCompetenceFormGroupe = [];
        this.competences = [];
        this.competences = competencesList;
        if (this.connected) {
          for (const item of this.competences) {
            this.competenceFormGroupe = new FormGroup({
              _id: new FormControl(item._id),
              title: new FormControl(item.title),
              text: new FormControl(item.text),
              imgs: new FormControl(item.imgs),
            });
            this.listCompetenceFormGroupe.push(this.competenceFormGroupe);
          }
        }
        this.listFiles = null;
        this.newCompetenceFormGroup.value.title = '';
        this.newCompetenceFormGroup.value.text = '';
        this.seeCreateCompetence();
        Swal.fire('OK', 'Compétence créé', 'success');
      });
  }

  public seeCreateCompetence() {
    this.create = !this.create;
    this.create
      ? (this.titleBtnCreate = 'Fermer')
      : (this.titleBtnCreate = 'Creer une compétence');
  }

  public deleteImg(e, id) {
    this.listFiles = new FormData();
    this.listFiles.append('imgs', e.model);
    this.listFiles.append('id', id.model);
    this.http
      .post<Competence[]>('http://localhost:3000/delete-imgs', this.listFiles, {
        withCredentials: true,
      })
      .subscribe((competencesList: Competence[]) => {
        this.listCompetenceFormGroupe = [];
        this.competences = [];
        this.competences = competencesList;
        if (this.connected) {
          for (const item of this.competences) {
            this.competenceFormGroupe = new FormGroup({
              _id: new FormControl(item._id),
              title: new FormControl(item.title),
              text: new FormControl(item.text),
              imgs: new FormControl(item.imgs),
            });
            this.listCompetenceFormGroupe.push(this.competenceFormGroupe);
          }
        }
        this.listFiles = null;
        Swal.fire('OK', 'Image supprimée', 'success');
      });
  }

  public loadFile(e) {
    this.listFiles = new FormData();
    this.listFiles.append('imgCompetence', e);
  }

  public updateFileCompetence(competence: FormGroup) {
    this.listFiles.append('id', competence.value._id);
    this.http
      .post<Competence[]>(
        'http://localhost:3000/imgs-competence',
        this.listFiles,
        {
          withCredentials: true,
        }
      )
      .subscribe((competencesList: Competence[]) => {
        this.listCompetenceFormGroupe = [];
        this.competences = [];
        this.competences = competencesList;
        if (this.connected) {
          for (const item of this.competences) {
            this.competenceFormGroupe = new FormGroup({
              _id: new FormControl(item._id),
              title: new FormControl(item.title),
              text: new FormControl(item.text),
              imgs: new FormControl(item.imgs),
            });
            this.listCompetenceFormGroupe.push(this.competenceFormGroupe);
          }
        }
        this.listFiles = null;
        Swal.fire('OK', 'Image compétence ajoutée', 'success');
      });
  }

  public updateCompetence(e, index) {
    this.http
      .post<Competence[]>(
        'http://localhost:3000/update-competence',
        this.listCompetenceFormGroupe[index].value,
        {
          withCredentials: true,
        }
      )
      .subscribe((competencesList: Competence[]) => {
        this.listCompetenceFormGroupe = [];
        this.competences = [];
        this.competences = competencesList;
        if (this.connected) {
          for (const item of this.competences) {
            this.competenceFormGroupe = new FormGroup({
              _id: new FormControl(item._id),
              title: new FormControl(item.title),
              text: new FormControl(item.text),
              imgs: new FormControl(item.imgs),
            });
            this.listCompetenceFormGroupe.push(this.competenceFormGroupe);
          }
        }
        Swal.fire('OK', 'Compétence modifiée', 'success');
      });
  }

  ngDoCheck() {
    this.connected = this.cookie.check('jwt');
  }

  ngOnInit(): void {
    this.connected = this.cookie.check('jwt');
    this.http
      .get<Competence[]>('http://localhost:3000/competences', {
        withCredentials: true,
      })
      .subscribe((competencesList: Competence[]) => {
        this.competences = competencesList;
        if (this.connected) {
          for (const item of this.competences) {
            this.competenceFormGroupe = new FormGroup({
              _id: new FormControl(item._id),
              title: new FormControl(item.title),
              text: new FormControl(item.text),
              imgs: new FormControl(item.imgs),
            });
            this.listCompetenceFormGroupe.push(this.competenceFormGroupe);
          }
          this.titleBtnCreate = 'Creer une compétence';
        }
      });

    this.newCompetenceFormGroup = new FormGroup({
      title: new FormControl(''),
      text: new FormControl(''),
      imgs: new FormControl([]),
    });
  }
}

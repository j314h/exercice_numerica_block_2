import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl } from '@angular/forms';
import { Competence } from '../../models/competence.interface';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit {
  public competences: Competence[];
  public connected: boolean;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  ngOnInit(): void {
    this.connected = this.cookie.check('jwt');
    this.http
      .get<Competence[]>('http://localhost:3000/competences', {
        withCredentials: true,
      })
      .subscribe((competencesList: Competence[]) => {
        this.competences = competencesList;
      });
  }
}

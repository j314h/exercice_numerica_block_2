import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CompetenceForm {
  public competenceFom: FormGroup;

  constructor() {}

  setCompetenceForm(x) {
    this.competenceFom = new FormGroup({
      title: new FormControl(x.title),
      text: new FormControl(x.text),
    });
    return this.competenceFom;
  }
}

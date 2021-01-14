import { Component, OnInit } from '@angular/core';

interface Competence {
  _id: String;
  title: String;
  text: String;
}

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit {
  public competences: Array<Competence>;
  public competence: Competence;

  constructor() {
    this.competence = {
      _id: '1',
      title: 'Front-end',
      text: `Angular et VueJS sont pour moi de véritables coups de cœur. Passionné par ces technologies, j’ai commencé mon apprentissage en autodidacte, pour, par la suite, consolider mes acquis et continuer mon apprentissage dans les deux formations que j’ai suivies. Après quelques projets personnels, je suis prêt à développer des applications dynamiques et réactives en Angular ou avec VueJS.`,
    };
    this.competences = [
      this.competence,
      this.competence,
      this.competence,
      this.competence,
    ];
  }

  ngOnInit(): void {
    console.log(this.competences);
  }
}

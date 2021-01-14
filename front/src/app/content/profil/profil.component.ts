import { Component, OnInit } from '@angular/core';

interface Profil {
  srcImage: String;
  text1: String;
  text2: String;
  text3: String;
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  public profil: Profil;

  constructor() {
    this.profil = {
      srcImage: '../../../assets/img/picture-profil-2017.png',
      text1: `Après une formation full Stack Javascript de 3 mois dans le développement
      web à l’école Oclock en télé présentiel. J’ai continué ma formation chez SEM
      Numerica pour une durée de 6 mois. Actuellement en pleine formation je suis
      à la recherche d’un stage de 2 mois afin d’obtenir mon titre Professionnel
      de développeur web et web mobile.`,
      text2: `Je suis quelqu'un de motivé et curieux faisant toujours preuve d'une grande
      détermination. Explorer de nouvelles opportunités, apprendre de nouvelles
      compétences, rencontrer de nouvelles personnes, tout cela a toujours été
      naturel chez moi, aussi bien dans la sphère personnelle que professionnelle.
      Étant autodidacte en développement lors de mes temps libres, j'ai décidé de
      faire une reconversion afin d'exercer un métier que j'aime et qui me
      passionne.`,
      text3: `J'ai commencé ma reconversion professionnelle par la formation Full-Stack JS
      chez Oclock d'une durée de 3 mois. Cette formation fut un véritable succès,
      j'ai pu approfondir des notions qui on été difficiles à assimiler quand on
      apprend seul. Suite à cela, je suis rentré chez SEM Numerica pour découvrir
      d'autres technologies, faire évoluer mes compétences en développement et en
      gestion de projet afin d'obtenir mon titre professionnel "développeur web et
      web mobile".`,
    };
  }

  ngOnInit(): void {}
}

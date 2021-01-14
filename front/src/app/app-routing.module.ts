import { ConnexionComponent } from './connexion/connexion.component';
import { CompetencesComponent } from './content/competences/competences.component';
import { ProfilComponent } from './content/profil/profil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProfilComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'connexion', component: ConnexionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

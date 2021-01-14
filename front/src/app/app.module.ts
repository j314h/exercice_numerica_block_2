import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './content/profil/profil.component';
import { CompetencesComponent } from './content/competences/competences.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { ContactComponent } from './content/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    ConnexionComponent,
    ProfilComponent,
    CompetencesComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

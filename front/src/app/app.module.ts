import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './content/profil/profil.component';
import { CompetencesComponent } from './content/competences/competences.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { ContactComponent } from './content/contact/contact.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    ConnexionComponent,
    ProfilComponent,
    CompetencesComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}

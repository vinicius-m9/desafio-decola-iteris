import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InstituicoesPageComponent } from './components/instituicoes-page/instituicoes-page.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { InstituicaoCardComponent } from './components/instituicao-card/instituicao-card.component';
import { DepoimentoCardComponent } from './components/depoimento-card/depoimento-card.component';
import { LeisPageComponent } from './components/leis-page/leis-page.component';
import { LeiCardComponent } from './components/lei-card/lei-card.component';
import { SobreCardComponent } from './components/sobre-card/sobre-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuTemplateComponent,
    HomePageComponent,
    InstituicoesPageComponent,
    SobrePageComponent,
    InstituicaoCardComponent,
    DepoimentoCardComponent,
    LeisPageComponent,
    LeiCardComponent,
    SobreCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

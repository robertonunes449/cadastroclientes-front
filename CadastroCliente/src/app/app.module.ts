import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgxMaskModule } from 'ngx-mask';
import { HeadComponent } from './Templates/head/head.component';
import { NavComponent } from './Templates/nav/nav.component';
import { FooterComponent } from './Templates/footer/footer.component';
import { MenuComponent } from './Views/menu/menu.component';
import { ColaboradorReadComponent } from './Components/Colaborador/colaborador-read/colaborador-read.component';
import { ColaboradorAddComponent } from './Components/Colaborador/colaborador-add/colaborador-add.component';
import { ColaboradorUpdateComponent } from './Components/Colaborador/colaborador-update/colaborador-update.component';
import { ColaboradorDeleteComponent } from './Components/Colaborador/colaborador-delete/colaborador-delete.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    FooterComponent,
    MenuComponent,
    ColaboradorReadComponent,
    ColaboradorAddComponent,
    ColaboradorUpdateComponent,
    ColaboradorDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './Templates/nav/nav.component';
import { MenuComponent } from './Views/menu/menu.component';


const routes: Routes = [
  {path: "", component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

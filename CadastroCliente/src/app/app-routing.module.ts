import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradorReadComponent } from './Components/Colaborador/colaborador-read/colaborador-read.component';
import { NavComponent } from './Templates/nav/nav.component';
import { MenuComponent } from './Views/menu/menu.component';


const routes: Routes = [
  {path: "", component: MenuComponent},

  {path: "colaboradores", component: ColaboradorReadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

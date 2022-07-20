import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradorAddComponent } from './Components/Colaborador/colaborador-add/colaborador-add.component';
import { ColaboradorReadComponent } from './Components/Colaborador/colaborador-read/colaborador-read.component';
import { NavComponent } from './Templates/nav/nav.component';
import { MenuComponent } from './Views/menu/menu.component';


const routes: Routes = [
  {path: "", component: MenuComponent},
  
  //Colaboradores
  {path: "colaboradores", component: ColaboradorReadComponent},
  {path: "colaboradores/add", component:ColaboradorAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

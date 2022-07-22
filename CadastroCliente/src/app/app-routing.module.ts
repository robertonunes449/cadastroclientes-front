import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradorAddComponent } from './Components/Colaborador/colaborador-add/colaborador-add.component';
import { ColaboradorDeleteComponent } from './Components/Colaborador/colaborador-delete/colaborador-delete.component';
import { ColaboradorReadComponent } from './Components/Colaborador/colaborador-read/colaborador-read.component';
import { ColaboradorUpdateComponent } from './Components/Colaborador/colaborador-update/colaborador-update.component';
import { NavComponent } from './Templates/nav/nav.component';
import { MenuComponent } from './Views/menu/menu.component';


const routes: Routes = [
  {path: "", component: MenuComponent},
  
  //Colaboradores
  {path: "colaboradores", component: ColaboradorReadComponent},
  {path: "colaboradores/add", component:ColaboradorAddComponent},
  {path: "colaboradores/delete/:id", component:ColaboradorDeleteComponent},
  {path: "colaboradores/update/:id", component:ColaboradorUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

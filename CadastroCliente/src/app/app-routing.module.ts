import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteAddComponent } from './Components/Cliente/cliente-add/cliente-add.component';
import { ClienteDeleteComponent } from './Components/Cliente/cliente-delete/cliente-delete.component';
import { ClienteReadAllComponent } from './components/cliente/cliente-read-all/cliente-read-all.component';
import { ClienteReadComponent } from './Components/Cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './Components/Cliente/cliente-update/cliente-update.component';
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

  //Clientes  
  {path: "clientes/:id_col/cliente", component: ClienteReadAllComponent},
  {path: "clientes", component: ClienteReadComponent},
  {path: "clientes/:id_col/cliente/create", component:ClienteAddComponent},
  {path: "clientes/:id_col/cliente/delete", component:ClienteDeleteComponent},
  {path: "clientes/:id_col/cliente/update", component:ClienteUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

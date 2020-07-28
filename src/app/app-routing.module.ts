import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { BibliotecaComponent } from './componentes/biblioteca/biblioteca.component';
import { ListComponent } from './componentes/libro/list/list.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'biblioteca', component:BibliotecaComponent},
  {path:'libros', component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

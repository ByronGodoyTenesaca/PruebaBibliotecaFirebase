import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoLibrosPage } from './listado-libros.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoLibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoLibrosPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoLibrosPageRoutingModule } from './listado-libros-routing.module';

import { ListadoLibrosPage } from './listado-libros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoLibrosPageRoutingModule
  ],
  declarations: [ListadoLibrosPage]
})
export class ListadoLibrosPageModule {}

import { ListadoLibrosService } from './../../services/listado-libros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Libro } from 'src/app/domain/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

  busqueda:string;
  libro:Libro= new Libro();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private servicioLibro:ListadoLibrosService) { }

  ngOnInit() {
  }

  buscarAutor(){
    let params: NavigationExtras={
      queryParams:{
        busqueda: this.busqueda,
        campo:"autor"
      }
    }

    this.router.navigate(['listado-libros'],params);
  }

  buscarTitulo(){
    let params: NavigationExtras={
      queryParams:{
        busqueda: this.busqueda,
        campo:"titulo"
      }
    }

    this.router.navigate(['listado-libros'],params);
  }

  buscarResumen(){
    let params: NavigationExtras={
      queryParams:{
        busqueda: this.busqueda,
        campo: "resumen"
      }
    }

    this.router.navigate(['listado-libros'],params);
  }
}

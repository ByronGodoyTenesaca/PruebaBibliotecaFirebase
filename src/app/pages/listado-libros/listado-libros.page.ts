import { ListadoLibrosService } from './../../services/listado-libros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.page.html',
  styleUrls: ['./listado-libros.page.scss'],
})
export class ListadoLibrosPage implements OnInit {

  libros:any;
  busqueda:string;
  campo:string;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private libroService:ListadoLibrosService) { 

      route.queryParams.subscribe(params =>{

        if(this.router.getCurrentNavigation().extras.queryParams){
          this.busqueda=this.router.getCurrentNavigation().extras.queryParams.busqueda;
          this.campo=this.router.getCurrentNavigation().extras.queryParams.campo;
        }
      })
    }

  ngOnInit() {
    this.libros=this.libroService.getLibros(this.campo,this.busqueda);
  }

}

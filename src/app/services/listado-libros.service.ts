import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadoLibrosService {

  constructor(private asf: AngularFirestore) { }

  getLibros(clave:string,valor:string): Observable<any[]>{
    const refContactos = this.asf.collection('libros',ref => ref.where(clave,"==",valor));
    return refContactos.valueChanges();
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListComponent} from '../componentes/libro/list/list.component';
import {Libro} from '../modelos/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private url='http://localhost:9000/libro';
  constructor(private http:HttpClient) { }
  getListarLibros(){
    return this.http.get<Libro[]>(this.url);
  }
}

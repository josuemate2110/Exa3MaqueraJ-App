import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';
import { Router } from '@angular/router';
import { Libro } from 'src/app/modelos/libro';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  libros:Libro[];
  constructor(private libroservice:LibroService,  private router:Router) { }

  ngOnInit(): void {
    this.listarLibros();
  }
  listarLibros(){
    this.libroservice.getListarLibros()
    .subscribe(data=>{
      this.libros=data;
    });
  }
}

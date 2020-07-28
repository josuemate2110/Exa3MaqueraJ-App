import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BibliotecaComponent } from './componentes/biblioteca/biblioteca.component';
import { ListComponent } from './componentes/libro/list/list.component';
import { LibroService } from './services/libro.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BibliotecaComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

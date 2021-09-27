import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { ContadorComponent } from './componentes/contador/contador.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ContadorDirective } from './directives/contador.directive';
import { UsuariosService } from './services/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorDirective,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

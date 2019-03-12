import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // valores por defecto
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  guardarAjustes() {
    console.log('Guardado en el localStorage');
    
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ) );
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      console.log('Cargando desde localStorage');

      this.aplicarTema( this.ajustes.tema );
    } else {
      console.log('Usando valor por defecto');
      this.aplicarTema( this.ajustes.tema );
      
    }
  }

  aplicarTema( tema: string) {

    let url = `assets/css/colors/${ tema }.css`;

    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

}

// Nos va ayudar a restringir los tipos de temas
interface Ajustes {
  temaUrl: string;
  tema: string;
}

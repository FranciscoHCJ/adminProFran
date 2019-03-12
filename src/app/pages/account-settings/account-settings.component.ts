import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ) {
    // console.log(link);
    this.aplicarCheck( link);

    this._ajustes.aplicarTema( tema);

  }

  aplicarCheck( link) {
    // Arreglo de selectores a través de vainilla JavaScript
    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
      // Para remover la clase working
      ref.classList.remove('working');
    }
    // Agregamos la clase working
    link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;

    for ( let ref of selectores ) {
      if (ref.getAttribute('data-theme') === tema ) {
          ref.classList.add('working');
          break;
      }
    }

  }


}

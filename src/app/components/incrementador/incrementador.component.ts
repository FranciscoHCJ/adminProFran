import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  // Nuevo decorador, recibe como parametro una referencia a un elemento html
  @ViewChild('txtProgress') txtProgress: ElementRef;

  // Input nos permite recibir los valores desde el componente padre.
  @Input('nombre') // Desde el exterior ahora a la variable se le conoce como 'nombre', por que fue renombrado en el decorador.
  leyenda: string = 'Leyenda'; // Se inicializan con un valor por defecto.

  @Input() porcentaje: number = 50; // Se inicializan con un valor por defecto.

  @Output('valorChange') // valorChange es el evento que sera enviado al componente padre denominado Progress
  cambioValor: EventEmitter <number> = new EventEmitter(); 

  constructor() { 
    // console.log('Leyenda', this.leyenda);
    // console.log('Porcentaje', this.porcentaje);    
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Porcentaje', this.porcentaje);    
  }

  onChanges( newValue: number ) {
    // Vainilla JavaScript
    // let elemHTML: any = document.getElementsByName('porcentaje')[0];

    if ( newValue >= 100) {
      this.porcentaje = 100;
    } else if ( newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    // elemHTML.value = this.porcentaje;

    this.txtProgress.nativeElement = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );
  }

  cambiarValor( valor: number ) {
    
    this.porcentaje = this.porcentaje + valor;

    if (this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
    }

    if ( this.porcentaje <= 0 && valor < 0 ) {
      this.porcentaje = 0;
      return;
    }

    this.cambioValor.emit( this.porcentaje );

    this.txtProgress.nativeElement.focus();
  }

}

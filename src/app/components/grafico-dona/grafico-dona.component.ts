import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // @Input() ChartLabels: string[] = [];
  // @Input() ChartData: number[] = [];
  // @Input() ChartType: string = '';

  // Se crea un objeto que está a la espera de otro objeto desde el componente padre
  @Input('chartData') chartData: any = {};

  constructor() { }

  ngOnInit() {
  }

}

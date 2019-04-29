import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, Chart } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {  
  // Line chart
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 90], label: 'Signa Premier' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Acelerador Lineal Clinac 600c' }
  ];
  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left'
        }
      ],     
    },
    annotation: {
      annotations: []
    }
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(123,31,162,0.2)',
      borderColor: 'rgba(123,31,162,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // Pie chart
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
      labels: {
        fontColor: '#333'
      }
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];        
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['Adultos', 'Tercera edad', 'Niños'];
  public pieChartData: number[] = [300, 400, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
    Chart.defaults.global.defaultFontColor = '#333';
  }
}

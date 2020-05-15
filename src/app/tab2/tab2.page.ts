import { NavController } from '@ionic/angular';
import { Component, ViewChild, ɵɵNgOnChangesFeature } from '@angular/core';
import { Chart } from 'chart.js';
import { Tab2Service } from './tab2.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public listaDadosGrafico:any;
  public lineChartData:Array<any> = [{data: [], label: []}];
  public mesSelect:any = this.buscarMes();

  constructor(private tab2Service: Tab2Service) {}

  ngOnInit(){ 
    this.tab2Service.buscarDadosGrafico(this.mesSelect, new Date().getFullYear()).subscribe((dados) => {
      const response = (dados as any);
      const objeto_retorno = JSON.parse(response._body);
      this.listaDadosGrafico = objeto_retorno;

      let lineChartData:Array<any> = [];

      if(this.listaDadosGrafico.length == 0){
        lineChartData[0] = {data: [], label: []};

        lineChartData[0].label = '';
        lineChartData[0].data = [0, 0, 0, 0];
        this.lineChartData = lineChartData;
      }else{
        for(let i=0; i < this.listaDadosGrafico.length; i++){
          lineChartData[i] = {data: [], label: []};
  
          let nome:string = this.listaDadosGrafico[i][0];
          let semana1:number = this.listaDadosGrafico[i][1];
          let semana2:number = this.listaDadosGrafico[i][2];
          let semana3:number = this.listaDadosGrafico[i][3];
          let semana4:number = this.listaDadosGrafico[i][4];
  
          lineChartData[i].label = nome;
          lineChartData[i].data = [semana1, semana2, semana3, semana4];
          this.lineChartData = lineChartData;
        }
      }
    },
    error => {
      console.log(error);
    })
  }

  public lineChartLabels:Array<any> = ['1º Semana', '2º Semana', '3º Semana', '4º Semana'];

  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
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
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend:boolean = true;

  public lineChartType:string = 'line';
  
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

  /**
  * Método para buscar o mes
  */
  buscarMes(){
    var data = new Date();
    var mesDate:number =  data.getMonth()+1;
    var mes = mesDate < 10 ? "0"+mesDate : mesDate;
    return mes;
  }

  /**
   * Verifica mudança no
   * mês escolhido a partir do 
   * select option e executa nova 
   * requisição de dados
   */
  refreshDados(){
    this.ngOnInit();
    console.log("entrou")
  }
}

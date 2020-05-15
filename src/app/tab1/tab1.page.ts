import { Component } from '@angular/core';
import { Tab1Service } from './tab1.service';
import { Tab3Service } from '../tab3/tab3.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public data:any;
  public mes:any;
  public valorTotal:any = 0;
  public metaTotal:any = 0;
  public metaImagem:any;
  public taxaTotal:number = 0;

  constructor(private tab1Service: Tab1Service) {
    let TIME_IN_MS = 5000;
    let hideFooterTimeout = setInterval(() => {
      this.ngOnInit();
    }, TIME_IN_MS);
  }

  ngOnInit(){
    this.buscarDataAtual();
    this.buscarMesAtual();
    this.buscarValorTotal(this.mes);
    this.buscarMetaTotal();
  }

  /**
   * Método para buscar a data atual
   * Responsável por demonstrar a data da atual avalização
   * do custo de energia elétrica.
   */
  buscarDataAtual(){
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    this.data = this.obterMes(mes)+" de "+ano;
  }

    /**
   * Método para buscar o mes atual
   * Responsável por demonstrar a data da atual avalização
   * do custo de energia elétrica.
   */
  buscarMesAtual(){
    var data = new Date();
    var mesDate:number =  data.getMonth()+1;
    var mes = mesDate < 10 ? "0"+mesDate : mesDate;
    this.mes = mes;
  }

/**
 * Método para buscar o mês em formato de texto
 * @param mes 
 */
  obterMes(mes:number){
    var arrayMes = new Array(12);
    arrayMes[0] = "Janeiro";
    arrayMes[1] = "Fevereiro";
    arrayMes[2] = "Março";
    arrayMes[3] = "Abril";
    arrayMes[4] = "Maio";
    arrayMes[5] = "Junho";
    arrayMes[6] = "Julho";
    arrayMes[7] = "Agosto";
    arrayMes[8] = "Setembro";
    arrayMes[9] = "Outubro";
    arrayMes[10] = "Novembro";
    arrayMes[11] = "Dezembro";
    var mesData = arrayMes[mes];

    return mesData;
  }

  /**
   * Método para inidicar uma imagem se a meta de consumo
   * mensal foi atingida ou não
   */
  buscarMetaImagem(meta){
      if(meta < 0){
        this.metaImagem = "assets/vermelho.gif";
      }else{
        this.metaImagem = "assets/verde.gif";
      }
  }

    /**
   * Método para buscar valor total do consumo
   * mensal
   */
  buscarValorTotal(mes){
    this.tab1Service.buscarValorBandeiras().subscribe((response) => {
      if(response[0].verde == null ? 0 : response[0].verde == 1){
        let txtVerde:number =  response[0].taxaFixa == null ? 0 : response[0].taxaFixa;
        let txtFixa:number =  response[0].taxaFixa == null ? 0 : response[0].taxaFixa;
        this.taxaTotal =  txtVerde + txtFixa;
      }else if(response[0].amarela == null ? 0 : response[0].amarela == 1){
        let txtAmarela:number = response[0].bandAmarela == null ? 0 : response[0].bandAmarela;
        let txtFixa:number =  response[0].taxaFixa == null ? 0 : response[0].taxaFixa;
        this.taxaTotal =  txtAmarela + txtFixa;
      }else if(response[0].vermelha1 == null ? 0 : response[0].vermelha1 == 1){
        let txtVermelha1:number = response[0].bandVermelha1 == null ? 0 : response[0].bandVermelha1;
        let txtFixa:number =  response[0].taxaFixa == null ? 0 : response[0].taxaFixa;
        this.taxaTotal = txtVermelha1 + txtFixa;
      }else if(response[0].vermelha2 == null ? 0 : response[0].vermelha2 == 1){
        let txtVermelha2:number = response[0].bandVermelha2 == null ? 0 : response[0].bandVermelha2;
        let txtFixa:number =  response[0].taxaFixa == null ? 0 : response[0].taxaFixa;
        this.taxaTotal = txtVermelha2 + txtFixa;
      }
    });

    this.tab1Service.buscarConsumoTotal(mes).subscribe((response) => {
      this.valorTotal = Number(response[0].total == null ? 0 : response[0].total * this.taxaTotal).toFixed(2);
    });
  }

    /**
   * Método para buscar valor meta do consumo
   * mensal
   */
  buscarMetaTotal(){
    this.tab1Service.buscarMetaTotal().subscribe((response) => {
      let vlrTotal:number = this.valorTotal;
      let vlrMeta:number = response[0].meta == null ? 0 : response[0].meta;
      this.metaTotal = vlrMeta - vlrTotal;
      this.buscarMetaImagem(this.metaTotal);
    });
  }
}


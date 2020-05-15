import { Component } from '@angular/core';
import { Tab3Service } from './tab3.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public id:any = null;
  public bandVerde:number = 0;
  public bandAmarela:number = 0; 
  public bandVermelha1:number = 0;
  public bandVermelha2:number = 0;  
  public taxaFixa:number = 0;
  public verde:number = 0;
  public amarela:number = 0;
  public vermelha1:number = 0;
  public vermelha2:number = 0;

  constructor(private tab3Service: Tab3Service) {
    let TIME_IN_MS = 100000;
    let hideFooterTimeout = setInterval(() => {
      this.ngOnInit();
    }, TIME_IN_MS);
  }

  ngOnInit(){
    this.buscarValorBandeiras();
  }

  /**
   * Método para buscar dados das bandeiras
   * mensal
   */
  buscarValorBandeiras(){
    this.tab3Service.buscarValorBandeiras().subscribe((response) => {
      this.id = response[0].id == null ? 0 : response[0].id;
      this.bandVerde = response[0].bandVerde == null ? 0 : response[0].bandVerde;
      this.bandAmarela = response[0].bandAmarela == null ? 0 : response[0].bandAmarela;
      this.bandVermelha1 = response[0].bandVermelha1 == null ? 0 : response[0].bandVermelha1;
      this.bandVermelha2 = response[0].bandVermelha2 == null ? 0 : response[0].bandVermelha2;
      this.taxaFixa = response[0].taxaFixa == null ? 0 : response[0].taxaFixa;
      this.verde = response[0].verde == null ? 0 : response[0].verde;
      this.amarela = response[0].amarela == null ? 0 : response[0].amarela;
      this.vermelha1 = response[0].vermelha1 == null ? 0 : response[0].vermelha1;
      this.vermelha2 = response[0].vermelha2 == null ? 0 : response[0].vermelha2;
    });
  }

  /**
   * Método para alterar os dados da bandeira
   */
  gravarAlteracoesBandeiras(){
    this.tab3Service.updateNasBandeiras(this.id, this.bandVerde, this.bandAmarela, this.bandVermelha1, this.bandVermelha2, this.taxaFixa, this.verde, this.amarela, this.vermelha1, this.vermelha2).subscribe((data) => {
      console.log(true);
    },
    error => {
      console.log(error);
    })
  }
}

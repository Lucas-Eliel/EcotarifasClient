import { Component, Input, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab4ModalCtrlService } from './tab4ModalCtrl.service';

@Component({
  selector: 'tab4ModalCtrl',
  templateUrl: 'tab4ModalCtrl.page.html',
})

@Injectable()
export class Tab4ModalCtrl {

  @Input() tipo: any;
  @Input() id: any;
  @Input() equip: string;
  @Input() status: number = 0;
  @Input() statdtini: string = this.buscarDataAtual();
  @Input() ctrldtini: string = this.buscarDataAtual();
  @Input() controle: number = 0;
  @Input() estado: number = 0;

  constructor(private tab4ModalCtrlService : Tab4ModalCtrlService,public modalCtrl: ModalController) {
  }

  gravar(){
    this.tab4ModalCtrlService.incluir(this.equip, this.status, this.statdtini, this.ctrldtini, this.controle, this.estado).subscribe((data) => {
      console.log(true);
    },
    error => {
      console.log(error);
    });
  }

  excluir(){
    this.tab4ModalCtrlService.excluir(this.id).subscribe((data) => {
      console.log(true);
    },
    error => {
      console.log(error);
    });
  }

  close(){
    this.modalCtrl.dismiss();
  }

  buscarDataAtual(){
    var data = new Date();
    var dia = data.getDate() < 10 ? "0"+data.getDate() : data.getDate();
    var mes = data.getMonth() < 10 ? "0"+data.getMonth() : data.getMonth();
    var ano = data.getFullYear();

    return ano+"-"+mes+"-"+dia;
  }
}
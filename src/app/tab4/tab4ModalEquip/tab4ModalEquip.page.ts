import { Component, Input, Injectable } from '@angular/core';
import { Tab4ModalEquipService } from './tab4ModalEquip.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'tab4ModalEquip',
  templateUrl: 'tab4ModalEquip.page.html',
})

@Injectable()
export class Tab4ModalEquip {

  @Input() id: any;
  @Input() equip: string;
  @Input() meta: number;
  @Input() ctrl: number;
  @Input() arduino: number;

  constructor(private tab4ModalEquipService : Tab4ModalEquipService,public modalCtrl: ModalController) {
  }

  gravar(){
    this.tab4ModalEquipService.gravarOuAlterarEquipamento(this.equip, this.meta, this.ctrl,this.arduino).subscribe((data) => {
      console.log(true);
    },
    error => {
      console.log(error);
    });
  }

  excluir(){
    this.tab4ModalEquipService.excluirEquipamento(this.id).subscribe((data) => {
      console.log(true);
    },
    error => {
      console.log(error);
    });
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
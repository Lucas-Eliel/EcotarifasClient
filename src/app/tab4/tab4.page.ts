import { Component, Injectable } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Tab4Service } from '../tab4/tab4.service';
import { Tab4ModalEquip } from './tab4ModalEquip/tab4ModalEquip.page';
import { Tab4ModalCtrl } from './tab4ModalCtrl/tab4ModalCtrl.page';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

@Injectable()
export class Tab4Page {
  public listaCargas:any[] =[];
  public listaControles:any[] =[];
  public edicao = true;
  public inclusao = false;


  constructor(public navCtrl: NavController,private tab4Service: Tab4Service, public modalCtrl: ModalController) {
    let TIME_IN_MS = 5000;
    let hideFooterTimeout = setInterval(() => {
      this.ngOnInit();
    }, TIME_IN_MS);
  }

  ngOnInit(){
    /**
     * Busca das Cargas
     * Method GET
     */
    this.tab4Service.buscarCargas().subscribe((data) => {
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      this.listaCargas = objeto_retorno;
    },
    error => {
      console.log(error);
    })

    /**
     * Busca das Cargas
     * Method GET
     */
    this.tab4Service.buscarControles().subscribe((data) => {
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      this.listaControles = objeto_retorno;
    },
    error => {
      console.log(error);
    })
  }

  /**
   * Abre Modal para a inclusão 
   * de novo equipamento
   */
  async novoEquipamento() {
    const modal = await this.modalCtrl.create({
      component: Tab4ModalEquip,
      componentProps: {tipo : this.inclusao}
    });
    modal.present();
  }

  /**
   * Abre Modal para edição ou exclusão de Equipamento.
   * Na edição existe a possibilidade de alterar 
   * ou excluir
   * @param id 
   * @param equip 
   * @param meta 
   * @param ctrl 
   * @param arduino 
   */
  async editarOuExcluirEquipamento(id:any, equip:string, meta:number, ctrl:number, arduino:number) {
    const modal = await this.modalCtrl.create({
      component: Tab4ModalEquip,
      componentProps: {tipo : this.edicao, id : id, equip: equip, meta : meta, ctrl : ctrl, arduino : arduino }
    });
    modal.present();
  }

    /**
   * Abre Modal para a inclusão 
   * de novo Controle
   */
  async novoControle() {
    const modal = await this.modalCtrl.create({
    component: Tab4ModalCtrl,
    componentProps: {tipo : this.inclusao}
    });
    modal.present();
  }

    /**
   * Abre Modal para edição ou exclusão de Controle.
   * Na edição existe a possibilidade de alterar 
   * ou excluir
   * @param id 
   * @param equip 
   * @param meta 
   * @param ctrl 
   * @param arduino 
   */
  async editarOuExcluirControle(id:any, equip:string) {
    const modal = await this.modalCtrl.create({
      component: Tab4ModalCtrl,
      componentProps: {tipo : this.edicao, id : id, equip: equip}
    });
    modal.present();
  }

  operarGatilho(controleid:any, nome:any, status:any, statdtini:any, controle:any, ctrldtini:any, estado:any){
    let estadoAtual:number = estado == 1 ? 0 : 1;
    
    //Excluir Controle
    this.tab4Service.excluir(controleid).subscribe((data) => {
      console.log(true);
    },
    error => {
      console.log(error);
    });

    //Gravar novo controle com a acao
    this.tab4Service.incluir(nome , status, '2019-09-07', '2019-09-07', controle, estadoAtual).subscribe((data) => {
      console.log(true);
    },
    error => {
      console.log(error);
    });
  }
}

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { Tab4Service } from './tab4.service';
import { HttpModule } from '@angular/http';
import { Tab4ModalEquip } from './tab4ModalEquip/tab4ModalEquip.page';
import { Tab4ModalEquipService } from './tab4ModalEquip/tab4ModalEquip.service';
import { Tab4ModalCtrlService } from './tab4ModalCtrl/tab4ModalCtrl.service';
import { Tab4ModalCtrl } from './tab4ModalCtrl/tab4ModalCtrl.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }])
  ],
  declarations: [
    Tab4Page, Tab4ModalEquip, Tab4ModalCtrl
  ],
  entryComponents: [
    Tab4ModalEquip,
    Tab4ModalCtrl
  ],
  providers: [
    Tab4Service,
    Tab4ModalEquipService,
    Tab4ModalCtrlService
  ]
})
export class Tab4PageModule {}

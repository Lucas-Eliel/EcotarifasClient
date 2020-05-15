import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4ModalEquip } from './tab4ModalEquip.page';
import { HttpModule } from '@angular/http';
import { Tab4ModalEquipService } from './tab4ModalEquip.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{ path: '', component: Tab4ModalEquip }])
  ],
  declarations: [
    Tab4ModalEquip
  ],
  exports: [
    Tab4ModalEquip
  ],
  providers: [
    Tab4ModalEquipService
  ]
})
export class Tab4ModalEquipModule {}

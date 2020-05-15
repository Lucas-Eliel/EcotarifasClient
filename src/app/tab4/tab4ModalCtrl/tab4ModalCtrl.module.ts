import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Tab4ModalCtrlService } from './tab4ModalCtrl.service';
import { Tab4ModalCtrl } from './tab4ModalCtrl.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{ path: '', component: Tab4ModalCtrl }])
  ],
  declarations: [
    Tab4ModalCtrl
  ],
  exports: [
    Tab4ModalCtrl
  ],
  providers: [
    Tab4ModalCtrlService
  ]
})
export class Tab4ModalCtrlModule {}

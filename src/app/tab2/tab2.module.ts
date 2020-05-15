import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ChartsModule } from 'ng2-charts';
import { Tab2Service } from './tab2.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    IonicModule,
    ChartsModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page],
  providers: [
    Tab2Service
  ]
})
export class Tab2PageModule {}
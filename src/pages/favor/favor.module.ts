import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavorPage } from './favor';

@NgModule({
  declarations: [
    FavorPage,
  ],
  imports: [
    IonicPageModule.forChild(FavorPage),
  ],
})
export class FavorPageModule {}

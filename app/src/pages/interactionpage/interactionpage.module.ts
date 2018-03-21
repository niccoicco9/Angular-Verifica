import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModicaAggiungi } from './interactionpage';

@NgModule({
  declarations: [
    ModicaAggiungi,
  ],
  imports: [
    IonicPageModule.forChild(ModicaAggiungi),
  ],
})
export class InteractionpagePageModule {}

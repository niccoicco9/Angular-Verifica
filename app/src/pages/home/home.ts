import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModicaAggiungi } from '../../pages/interactionpage/interactionpage';
import { itemprestati } from '../../models/modello';
import { ProviderServizio } from '../../providers/oggettiprovider/oggettiprovider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  oggetti: itemprestati[] = [];
  constructor(private oggettoProvider: ProviderServizio, public navCtrl: NavController) {
    this.oggettoProvider.getOggetti().subscribe(oggetti => this.oggetti = oggetti);
  }
  addItem(){
    this.navCtrl.push(ModicaAggiungi, {selector: 'Aggiungi'});
  }
  removeItem(oggetto: itemprestati){
    this.oggettoProvider.removeItem(oggetto.id);
  }
  modificaItem(oggetto: itemprestati) {
    this.navCtrl.push(ModicaAggiungi, {selector: 'modifica', oggetto: oggetto} );
  }
}

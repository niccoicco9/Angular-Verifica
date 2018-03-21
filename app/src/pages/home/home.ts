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
  prestiti: itemprestati[] = [];
  constructor(private prestitoProvider: ProviderServizio, public navCtrl: NavController) {
    this.prestitoProvider .getdelloggetto().subscribe(prestiti => this.prestiti = prestiti);
  }
  
 
  modificaItem(prestito: itemprestati) {
    this.navCtrl.push(ModicaAggiungi, {selector: 'modifica', prestito: prestito} );
  }

  addItem(){
    this.navCtrl.push(ModicaAggiungi, {selector: 'Aggiungi'});
  }

  removeItem(prestito: itemprestati){
    this.prestitoProvider.removeItem(prestito.id);
  }
}

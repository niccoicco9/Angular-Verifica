import { Component } from '@angular/core';
import { NavController,Platform, ModalController } from 'ionic-angular';
import { ModicaAggiungi } from '../../pages/interactionpage/interactionpage';
import { itemprestati } from '../../models/modello';
import { ProviderServizio } from '../../providers/oggettiprovider/oggettiprovider';
import { NativeStorage } from '@ionic-native/native-storage';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  prestiti: itemprestati[] = [];
  constructor(private nativeStorage: NativeStorage, private prestitoProvider: ProviderServizio, public navCtrl: NavController) {
    this.prestitoProvider .getdelloggetto().subscribe(prestiti => this.prestiti = prestiti);
  }
  
 
  modificaItem(prestito: itemprestati) {
    this.navCtrl.push(ModicaAggiungi, {selector: 'modifica', prestito: prestito} );
  }

  aggiungi(){
    this.navCtrl.push(ModicaAggiungi, {selector: 'Aggiungi'});
  }

  rimuovi(prestito: itemprestati){
    this.prestitoProvider .rimuovi(prestito.id);
  }
}




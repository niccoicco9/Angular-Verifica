import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { itemprestati } from '../../models/modello';
import { HomePage } from '../home/home';
import { ProviderServizio } from '../../providers/oggettiprovider/oggettiprovider';



@IonicPage()
@Component({
  selector: 'page-interactionpage',
  templateUrl: 'interactionpage.html',
})
export class ModicaAggiungi {

selector: string;
prestito: itemprestati;


  constructor(private prestitoProvider: ProviderServizio, public navCtrl: NavController, public navParams: NavParams) {
    this.selector = this.navParams.get('selector');
    this.selector === 'modifica' ? this.modificatore() : this.creatore();
  }

 
  creatore(){
    this.prestito = new itemprestati; 
    this.prestito.data = new Date().toISOString();
  }

  modificatore(){
    this.prestito = this.navParams.get('prestito'); 
  }


  modificaEff(){
    alert('modificato');
    this.navCtrl.push(HomePage);
  }


  aggMemo(){
    alert('aggiunto');
    this.prestitoProvider.addItem(this.prestito);
    this.navCtrl.push(HomePage);
  }

}

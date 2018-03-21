import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { itemprestati } from '../../models/modello';
import { HomePage } from '../home/home';
import { ProviderServizio } from '../../providers/oggettiprovider/oggettiprovider';

/**
 * Generated class for the AddModifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interactionpage',
  templateUrl: 'interactionpage.html',
})
export class ModicaAggiungi {
selector: string;
oggetto: itemprestati;
  constructor(private oggettoProvider: ProviderServizio, public navCtrl: NavController, public navParams: NavParams) {
    this.selector = this.navParams.get('selector');
    this.selector === 'modifica' ? this.modifyPage() : this.createPage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddModifyPage');
  }

  modifyPage(){
    this.oggetto = this.navParams.get('oggetto'); 
  }

  createPage(){
    this.oggetto = new itemprestati; 
    this.oggetto.data = new Date().toISOString();
  }

  modificaEff(){
    alert('modificato');
    this.navCtrl.push(HomePage);
  }
  aggMemo(){
    alert('aggiunto');
    this.oggettoProvider.addItem(this.oggetto);
    this.navCtrl.push(HomePage);
  }

}

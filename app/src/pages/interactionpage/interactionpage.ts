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
    this.navCtrl .setRoot(HomePage);
  }


  aggMemo(){
    alert('aggiunto');
    this.prestitoProvider.aggiungi(this.prestito);
    this.navCtrl .setRoot(HomePage);
  }

}

/*
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddModifyPage } from '../add-modify/add-modify';
import { Oggetto } from '../../models/oggetto';
import { OggettoProvider } from '../../providers/oggetto/oggetto';
import { NativeStorage } from '@ionic-native/native-storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  oggetti: Oggetto[] = [];
  constructor(private nativeStorage: NativeStorage, private oggettoProvider: OggettoProvider, public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    this.nativeStorage.getItem('oggetti').then(oggetti => {
      this.oggetti = oggetti;
      alert('si');
      this.oggettoProvider.setOggetti(this.oggetti);
      }).catch((error) => {
        console.log(error);
        alert('no');
        this.oggettoProvider.setOggetti(this.oggetti);
      });
  }
  addItem(){
    this.navCtrl.push(AddModifyPage, {selector: 'Aggiungi'});
  }
  rimuoviOggetto(oggetto: Oggetto){
    this.oggettoProvider.removeOggetto(oggetto.id);
  }
  modificaOggetto(oggetto: Oggetto) {
    this.navCtrl.push(AddModifyPage, {selector: 'modifica', oggetto: oggetto} );
  }
}
*/

import { Injectable } from '@angular/core';
import { itemprestati } from '../../models/modello';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ProviderServizio {
  oggetti: itemprestati[] = [];
  date: string = new Date().toISOString();
  constructor() {
    this.oggetti = [
    {id: 1, 
    nome: 'videogioco',  
    data: this.date, 
    foto: 'img1'},
    {id: 2, 
    nome: 'scarpe',  
    data: this.date, 
    foto: 'img2'}];
  }
  
  addItem(oggetto: itemprestati): void {
    this.oggetti.push(oggetto);
  }
  
  getOggetti(): Observable<itemprestati[]> {
    return of(this.oggetti);
  }
  
  getOggetto(id: number): Observable<itemprestati> { 
    return of(this.oggetti.find(oggetto => oggetto.id === id));
  }
  
  removeItem(id: number): void{
    this.oggetti.forEach((item, index) => {
      if(item.id === id) this.oggetti.splice(index,1);
    });
    alert('rimosso');
  }
}
import { Injectable } from '@angular/core';
import { itemprestati } from '../../models/modello';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()


export class ProviderServizio {
  prestiti: itemprestati[] = [];
  date: string = new Date().toISOString();
  constructor() {
    this.prestiti = [
    {id: 1, 
    nome: 'videogioco',  
    data: this.date, 
    foto: 'img1',
    persona:'Pietro'},

    
    {id: 2, 
    nome: 'scarpe',  
    data: this.date, 
    foto: 'img2',
    persona:'Giacomo'},


  { id: 3, 
    nome: 'Macchina',  
    data: this.date, 
    foto: 'img2',
    persona:'Leonardo'}];
  }
  
  
  
  
  
  getdelprestito(id: number): Observable<itemprestati> { 
    return of(this.prestiti.find(prestito => prestito.id === id));
  }


  getdelloggetto(): Observable<itemprestati[]> {
    return of(this.prestiti);
  }
  

  addItem(prestito: itemprestati): void {
    this.prestiti.push(prestito);
  }


  removeItem(id: number): void{
    this.prestiti.forEach((item, index) => {
      if(item.id === id) this.prestiti.splice(index,1);
    });
    alert('rimosso');
  }
}
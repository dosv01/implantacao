import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Equipe } from './equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeDataService {

  private equipeSource = new BehaviorSubject({ equipe: null, key: '' });
  currentEquipe = this.equipeSource.asObservable();

  constructor() { }

  changeEquipe(equipe: Equipe, key: string) {
    console.log(equipe);
    this.equipeSource.next({ equipe: equipe, key: key });
  }
}
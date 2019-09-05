import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Implantacao } from './implantacao';

@Injectable({
  providedIn: 'root'
})
export class ImplantacaoDataService {

  private implantacaoSource = new BehaviorSubject({ implantacao: null, key: '' });
  currentImplantacao = this.implantacaoSource.asObservable();

  constructor() { }

  changeImplantacao(implantacao: Implantacao, key: string) {
    console.log(implantacao);
    this.implantacaoSource.next({ implantacao: implantacao, key: key });
  }
}
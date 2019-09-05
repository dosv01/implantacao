import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Implantacao } from './implantacao';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImplantacaoService {

  constructor(private db: AngularFireDatabase) { }

  insert(implantacao: Implantacao) {
    console.log("implantacao - final")
    console.log(implantacao)
    this.db.list('implantacao').push(implantacao)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(implantacao: Implantacao, key: string) {
    this.db.list('implantacao').update(key, implantacao)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('implantacao')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  getById(key: string) {
    // return this.db.object(`implantacao/${key}`)
    //   .snapshotChanges()
    //   .pipe(
    //     map(changes => {
    //       console.log(changes)
    //       return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    //     })
    //   );
    return this.db.object(`implantacao/${key}`)
      .snapshotChanges()
      .pipe(
        map(changes => changes.payload.val())
      );
  }

  delete(key: string) {
    this.db.object(`implantacao/${key}`).remove();
  }
}

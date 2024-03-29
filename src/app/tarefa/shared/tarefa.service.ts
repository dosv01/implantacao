import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Tarefa } from './tarefa';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private db: AngularFireDatabase) { }

  insert(tarefa: Tarefa) {
    this.db.list('tarefa').push(tarefa)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(tarefa: Tarefa, key: string) {
    this.db.list('tarefa').update(key, tarefa)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('tarefa')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`tarefa/${key}`).remove();
  }
}

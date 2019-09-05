import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Equipe } from './equipe';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private db: AngularFireDatabase) { }

  insert(equipe: Equipe) {
    this.db.list('equipe').push(equipe)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(equipe: Equipe, key: string) {
    this.db.list('equipe').update(key, equipe)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('equipe')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`equipe/${key}`).remove();
  }
}

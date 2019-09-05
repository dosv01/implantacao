import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  // createUser(value, avatar) {
  //   return this.db.collection('users').add({
  //     name: value.name,
  //     nameToSearch: value.name.toLowerCase(),
  //     surname: value.surname,
  //     age: parseInt(value.age),
  //     avatar: avatar
  //   });
  // }

  // getPeople() {
  //   return new Promise<any>((resolve, reject) => {
  //     this.afs.collection('/people').snapshotChanges()
  //       .subscribe(snapshots => {
  //         resolve(snapshots)
  //       })
  //   })
  // }

  // updateUser(userKey, value) {
  //   value.nameToSearch = value.name.toLowerCase();
  //   return this.db.collection('users').doc(userKey).set(value);
  // }

  // deleteUser(userKey){
  //   return this.db.collection('users').doc(userKey).delete();
  // }
}

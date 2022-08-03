import {Injectable} from '@angular/core';

import {map, timestamp} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as firebase from 'firebase/compat';
// @ts-ignore
import {User} from 'firebase';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";



@Injectable({
  providedIn: 'root'
})
export class PostService {

  currentUser: User;

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth,
             ) {
    this.afAuth.authState.subscribe(user => this.currentUser = user);
  }

  getAllPosts(): Observable<any> {
    return this.afs.collection<any>('posts', ref => ref.orderBy('time', 'desc'))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data(),
            };
          });
        })
      );
  }

  postMessage(message: string): void {
    this.afs.collection('posts').add({
      message,
      //title: ownerName,
      //user_id: this.currentUser.uid,
      //time:timestamp(),
      //...otherItem
    }).then(res => console.log(res));
  }


}

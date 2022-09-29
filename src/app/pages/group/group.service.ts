import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class GroupService {

  constructor(private firestore: Firestore) {
  }

  get(){
    const collectionRef = collection(this.firestore, 'group');
    return collectionData(collectionRef, { idField: 'id'});
  }

  add(data: any): Promise<any> {
    const collectionRef = collection(this.firestore, 'group');
    return addDoc(collectionRef, data);
  }

  getByID(id: string) {
    const refDoc = doc(this.firestore, `group/${id}`);
    return docData(refDoc, { idField: 'id' }) as Observable<any>;
  }

  update(item: any) {
    const docRef = doc(this.firestore, `group/${item.id}`);
    //return setDoc(bookDocRef, docRef);
  }

  delete(item: any) {
    const docRef = doc(this.firestore, `group/${item.id}`);
    return updateDoc(docRef,
      {
        active: false ,
        deletedAt: Date(),
      });
  }

  realDelete(item: any) {
    const docRef = doc(this.firestore, `group/${item.id}`);
    return deleteDoc(docRef);
  }

}

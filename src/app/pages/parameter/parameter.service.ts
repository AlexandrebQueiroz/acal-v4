import { Injectable } from '@angular/core';
import {
  addDoc,
  collection, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class ParameterService {

  constructor(private firestore: Firestore) {
  }

  get(){
    const collectionRef = collection(this.firestore, 'gathering');
    return collectionData(collectionRef, { idField: 'id'});
  }

  add(data: any): Promise<any> {
    const collectionRef = collection(this.firestore, 'gathering');
    return addDoc(collectionRef, data);
  }

  getByID(id: string) {
    const refDoc = doc(this.firestore, `gathering/${id}`);
    return docData(refDoc, { idField: 'id' }) as Observable<any>;
  }

  update(item: any) {
    const docRef = doc(this.firestore, `gathering/${item.id}`);
  }

  delete(item: any) {
    const docRef = doc(this.firestore, `gathering/${item.id}`);
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

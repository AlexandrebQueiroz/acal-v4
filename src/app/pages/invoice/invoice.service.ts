import { Injectable } from '@angular/core';
import {
  addDoc,collection, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class InvoiceService {

  private domain = 'invoice';

  constructor(private firestore: Firestore) {
  }

  get(){
    const collectionRef = collection(this.firestore, this.domain);
    return collectionData(collectionRef, { idField: 'id'});
  }

  add(data: any): Promise<any> {
    const collectionRef = collection(this.firestore, this.domain);
    return addDoc(collectionRef, data);
  }

  getByID(id: string) {
    const refDoc = doc(this.firestore, `${this.domain}/${id}`);
    return docData(refDoc, { idField: 'id' }) as Observable<any>;
  }

  update(item: any) {
    const docRef = doc(this.firestore, `${this.domain}/${item.id}`);
  }

  delete(item: any) {
    const docRef = doc(this.firestore, `${this.domain}/${item.id}`);
    return updateDoc(docRef,
      {
        active: false ,
        deletedAt: Date(),
      });
  }

  realDelete(item: any) {
    const docRef = doc(this.firestore, `${this.domain}/${item.id}`);
    return deleteDoc(docRef);
  }
}

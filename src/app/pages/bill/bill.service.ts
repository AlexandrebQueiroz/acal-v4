import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable()
export class BillService {

  constructor(private firestore: Firestore) {
  }

  get(){
    const collectionRef = collection(this.firestore, 'bill');
    return collectionData(collectionRef);
  }

  add(data: any): Promise<any> {
    const collectionRef = collection(this.firestore, 'bill');
    return addDoc(collectionRef, data);
  }
}

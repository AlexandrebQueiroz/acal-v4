import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable()
export class CustomerService {

  constructor(private firestore: Firestore) {
  }

  get(){
    const collectionRef = collection(this.firestore, 'customer');
    return collectionData(collectionRef);
  }

  add(data: any){
    const collectionRef = collection(this.firestore, 'customer');
    addDoc(collectionRef, data);
  }
}

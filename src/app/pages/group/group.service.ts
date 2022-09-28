import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable()
export class GroupService {

  constructor(private firestore: Firestore) {
  }

  get(){
    const collectionRef = collection(this.firestore, 'group');
    return collectionData(collectionRef);
  }

  add(data: any): Promise<any> {
    const collectionRef = collection(this.firestore, 'group');
    return addDoc(collectionRef, data);
  }
}

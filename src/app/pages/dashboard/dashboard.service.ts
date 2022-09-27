import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { doc } from '@firebase/firestore';

@Injectable()
export class DashboardService {

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

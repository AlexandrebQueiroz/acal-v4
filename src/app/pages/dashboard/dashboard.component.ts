import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  item$: Observable<any[]>;

  constructor(firestore: Firestore) {
    const collectionRef = collection(firestore, 'customer');
    this.item$ = collectionData(collectionRef);
  }
}

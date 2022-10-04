import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { UserActive, UserActivityData } from '../data/user-activity';

@Injectable()
export class UserActivityService extends UserActivityData {

  constructor() {
    super();
  }

  getUserActivityData(period: string): Observable<UserActive[]> {
    return observableOf(null);
  }
}

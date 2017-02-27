import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState, UserRecord, getUserState } from '../../store';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {


  public user$: Observable<UserRecord>;

  constructor(
    public navCtrl: NavController,
    public store: Store<ApplicationState>
  ) {
    this.user$ = this.store.select(getUserState);
  }

}

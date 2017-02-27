import { Action } from '@ngrx/store';
import { UserRecord } from '../';

export const ActionTypes = {
  INIT_USER: 'init_user'
}


export class InitUserAction implements Action {
  type = ActionTypes.INIT_USER
  constructor(public user: UserRecord) { }
}

export type Actions
  = InitUserAction;
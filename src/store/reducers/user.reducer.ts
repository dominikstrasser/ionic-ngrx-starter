
import * as userAction from '../actions/user.action';
import { UserRecord } from '../index';

const initialState: UserRecord = null;


export function reducer(state = initialState, action: userAction.Actions): UserRecord {

  switch (action.type) {
    case userAction.ActionTypes.INIT_USER: {
      return state = action.user;
    }

    default:
      return state;
  }

}
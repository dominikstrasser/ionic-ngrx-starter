import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import * as userReducer from './reducers/user.reducer';
import { UserRecord } from './';


export interface ApplicationState {
  userState: UserRecord
}

const reducers = {
  userState: userReducer.reducer
}


const developmentReducer: ActionReducer<ApplicationState> = compose(combineReducers)(reducers);
export function rootReducer(state: any, action: any) {
  return developmentReducer(state, action);
};

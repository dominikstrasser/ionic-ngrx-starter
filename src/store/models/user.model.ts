import { makeTypedFactory, TypedRecord } from 'typed-immutable-record';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export interface UserRecord extends TypedRecord<UserRecord>, User { }

export class UserModel {

  private static defaultUser: User = {
    id: '',
    name: '',
    email: '',
  }


  private static UserFactory = makeTypedFactory<User, UserRecord>(UserModel.defaultUser);

  public static create(user: User) {
    const extendedUser: User = Object.assign({}, user);
    return UserModel.UserFactory(extendedUser);
  }
}


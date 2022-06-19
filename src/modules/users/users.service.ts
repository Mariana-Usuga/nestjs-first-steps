import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user-dto';

@Injectable()
export class UsersService {
  private _users: UserDto[];

  constructor() {
    this._users = [];
  }

  createUser(user: UserDto) {
    const userFound = this._users.find((u) => u.id == user.id);

    if (!userFound) {
      this._users.push(user);
      return true;
    } else {
      return false;
    }
  }

  getUsers(start: Date, end: Date) {
    if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
      return this._users.filter(
        (u) =>
          u.birthDate.getTime() >= start.getTime() &&
          u.birthDate.getTime() <= end.getTime(),
      );
    } else if (!isNaN(start.getTime()) && isNaN(end.getTime())) {
      return this._users.filter(
        (u) => u.birthDate.getTime() >= start.getTime(),
      );
    } else if (isNaN(start.getTime()) && !isNaN(end.getTime())) {
      return this._users.filter((u) => u.birthDate.getTime() <= end.getTime());
    } else {
      return this._users;
    }
  }

  updateUser(user: UserDto) {
    const userAdded = this.createUser(user);

    if (!userAdded) {
      console.log('entra en no existe ese');
      const index = this._users.findIndex((u) => u.id == user.id);
      this._users[index] = user;
      return true;
    } else {
      return false;
    }
  }

  deleteUser(idUser: number) {
    const indexUserFound = this._users.findIndex((u) => u.id == idUser);

    if (indexUserFound != -1) {
      this._users.splice(indexUserFound, 1);
      return true;
    }
    return false;
  }
}

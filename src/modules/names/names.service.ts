import { Injectable } from '@nestjs/common';

@Injectable()
export class NamesService {
  private _names: string[];

  constructor() {
    this._names = [];
  }

  createNameService(name: string) {
    const nameFound = this._names.find(
      (n) => n.toLowerCase().trim() == name.toLowerCase().trim(),
    );

    if (!nameFound) {
      this._names.push(name);
      return true;
    } else {
      return false;
    }
  }

  getNamesService(start?: string) {
    if (!start) {
      return this._names;
    } else {
      return this._names.filter((n) =>
        n.toLowerCase().trim().startsWith(start.toLowerCase()),
      );
    }
  }

  updateNameService(name: string, newName: string) {
    const indexNameFound = this._names.findIndex(
      (n) => n.toLowerCase().trim() == name.toLowerCase().trim(),
    );
    const indexNewNameFound = this._names.findIndex(
      (n) => n.toLowerCase().trim() == newName.toLowerCase().trim(),
    );

    if (indexNameFound != -1 && indexNewNameFound == -1) {
      this._names[indexNameFound] = newName;
      return;
    } else {
      return false;
    }
  }

  deleteNameService(name: string) {
    const nameFound = this._names.find(
      (n) => n.toLowerCase().trim() == name.toLowerCase().trim(),
    );

    if (nameFound) {
      this._names = this._names.filter((n) => n.toLowerCase() != name);
      return true;
    } else {
      return false;
    }
  }

  clearNamesService() {
    this._names = [];
    return true;
  }
}

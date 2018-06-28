import { RestService } from './../../shared/services/rest.service';
import { Injectable } from '@angular/core';
import { AddUser } from '../model/add-user.model';

@Injectable()
export class UserService {

  constructor(private restService: RestService) { }

  getUsers() {
    const url = 'http://localhost:4000/users';
    return this.restService.getByUrl(url);
  }

  getUserById(id: any) {
    const url = 'http://localhost:4000/users/edit/' + id;
    return this.restService.getByUrl(url);
  }

  addUser(user: AddUser) {
    const url = 'http://localhost:4000/users/add';

    return this.restService.postByUrl(url, user);
  }

  updateUser(user: AddUser) {
    const url = 'http://localhost:4000/users/update/' + user._id;

    return this.restService.postByUrl(url, user);
  }

  deleteUser(id) {
    const url = 'http://localhost:4000/users/delete/' + id;

    return this.restService.getByUrl(url);
  }
  login(login: any) {
    const url = 'http://localhost:4000/users/add';

    return this.restService.postByUrl(url, login);
  }
}

import { RestService } from './../../shared/services/rest.service';
import { Injectable } from '@angular/core';
import { AddUser } from '../model/add-user.model';

@Injectable()
export class UserService {

  constructor(private restService: RestService) { }

  getUsers(url: string) {
    return this.restService.getByUrlWithoutOptions(url).map(
      data => {
        return data;
      },
      err => {
        console.log(err);
      });
  }
}

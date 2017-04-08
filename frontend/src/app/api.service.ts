import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getUser(authId, name) {
    return this.http.get('http://localhost:3000/api/user/'+ authId +'/' + name + '')
      .map(res => res.json());
  }

  getAllUsers() {
    return this.http.get('http://localhost:3000/api/users')
      .map(res => res.json());
  }

}

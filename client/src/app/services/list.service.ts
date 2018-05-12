import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ListService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(public http: Http) { }
  getList() {
    return this.http.get(`${this.BASE_URL}/api/list`)
      .map((res) => res.json());
  }

}

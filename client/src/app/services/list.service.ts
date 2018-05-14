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

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/list/${id}`)
      .map((res) => res.json());
  }

  edit(list) {
    return this.http.put(`${this.BASE_URL}/api/list/${list.id}`, list)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/list/${id}`)
      .map((res) => res.json());
  }

}

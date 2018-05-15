import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ListService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(public http: Http) { }

  //GET ALL THE LISTS
  getList() {
    return this.http.get(`${this.BASE_URL}/api/list`)
      .map((res) => res.json());
  }
  
  //CREATE LIST
  createList(list) {
    return this.http.post(`${this.BASE_URL}/api/list`, list)
      .map((res) => res.json());
  }

  //READ LIST
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/list/${id}`)
      .map((res) => res.json());
  }

  //UPDATE LIST
  editList(list) {
    return this.http.put(`${this.BASE_URL}/api/list/${list.id}`, list)
      .map((res) => res.json());
  }

  //DELETE LIST
  removeList(id) {
    return this.http.delete(`${this.BASE_URL}/api/list/${id}`)
      .map((res) => res.json());
  }

}

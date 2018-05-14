import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class EntryService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(public http: Http) { }
  
  getListOfEntries() {
    return this.http.get(`${this.BASE_URL}/api/entry`)
      .map((res) => res.json());
  }

  //CREATE ENTRY
  createEntry(entry) {
    return this.http.post(`${this.BASE_URL}/api/entry`, entry)
      .map((res) => res.json());
  }

  //READ ENTRY
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/entry/${id}`)
      .map((res) => res.json());
  }

  //UPDATE ENTRY
  edit(entry) {
    return this.http.put(`${this.BASE_URL}/api/entry/${entry.id}`, entry)
      .map((res) => res.json());
  }

  //DELETE ENTRY
  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/entry/${id}`)
      .map((res) => res.json());
  }


}

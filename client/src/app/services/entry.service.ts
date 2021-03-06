import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class EntryService {
  BASE_URL: string = 'http://localhost:3000';
  entries : any;
  entry: any;
  preview: any;

  constructor(public http: Http) { }
  
  //GET ALL THE ENTRIES BY LIST
  getListOfEntries(id) {
    return this.http.get(`${this.BASE_URL}/api/entry/objects/${id}`)
      .map((res) => res.json());
  }

  //CREATE ENTRY
  createEntry(entry) {
    return this.http.post(`${this.BASE_URL}/api/entry`, entry)
      .map((res) => res.json());
  }

  //READ ENTRY
  getEntry(id) {
    return this.http.get(`${this.BASE_URL}/api/entry/${id}`)
      .map((res) => res.json());
  }

  //UPDATE ENTRY
  editEntry(entry) {
    return this.http.put(`${this.BASE_URL}/api/entry/${entry.id}`, entry)
      .map((res) => res.json());
  }

  //DELETE ENTRY
  removeEntry(id) {
    return this.http.delete(`${this.BASE_URL}/api/entry/${id}`)
      .map((res) => res.json());
  }


}

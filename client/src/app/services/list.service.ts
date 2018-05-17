import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { SessionService } from './session.service';


@Injectable()
export class ListService {
  BASE_URL: string = 'http://localhost:3000';
  lists: Array<any>;
  listEvent: EventEmitter<any> = new EventEmitter;

  constructor(public http: Http, public sessionService: SessionService) { 
    this.getMyLists(this.sessionService.user._id).subscribe(l => this.lists = l);
  }

  //GET ALL THE LISTS
  // getList() {
  //   return this.http.get(`${this.BASE_URL}/api/list`)
  //     .map((res) => res.json());
  // }

  //GET LISTS BY USER
  getMyLists(id) {
    return this.http.get(`${this.BASE_URL}/api/list/mylists/${id}`)
    .map((res) => {
      this.listEvent.emit(this.lists);
      //this.lists = res.json();
      return res.json();
    });
  }
  
  //CREATE LIST
  createList(list) {
    return this.http.post(`${this.BASE_URL}/api/list`, list)
      .map((res) => {
        this.getMyLists(this.sessionService.user._id).subscribe( r => {
          console.log('list service')
          console.log(r)
          this.lists = r;
          this.listEvent.emit(this.lists);
        });        
      });
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
      .map((res) => {
        console.log(this.sessionService.user._id)
        this.getMyLists(this.sessionService.user._id).subscribe();
        return res.json()
      });
  }

}

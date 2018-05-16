import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  newList: any = {};
  lists: Array<any> = [];

  constructor(public listService: ListService, public sessionService: SessionService) {}

  ngOnInit() {
  }

  //CREATE LIST
  createList() {
    this.newList.userId = this.sessionService.user;
    this.listService.createList(this.newList).subscribe();  
  }
}

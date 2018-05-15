import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  newList: any = {};
  lists: Array<any> = [];

  constructor(public listService: ListService) {}

  ngOnInit() {
    this.listService.getList().subscribe(p => {
      this.lists = p;
    });
  }


  createList() {
    console.log(this.newList)
    this.listService.createList(this.newList).subscribe();
  }
}

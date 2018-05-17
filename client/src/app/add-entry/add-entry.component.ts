import { Component, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { ListService } from '../services/list.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  newEntry: any = {url:"", titleFile:"", comment:""};
  lists: Array<any> = [];
  //lists2: Array<any> = [];


  constructor(public entryService: EntryService, public listService: ListService, public sessionService: SessionService) { 
    this.listService.getMyLists(this.sessionService.user._id).subscribe(p => {
      this.lists = p;
    });
    this.listService.listEvent.subscribe(l => {
      this.lists = l;
      //this.lists2.shift();
    })
  }

  ngOnInit() {
    this.listService.getMyLists(this.sessionService.user._id).subscribe(q => {
      this.lists = q;
      //this.lists2.shift();
    });
  }
  
  createEntry(list) {
    console.log(list)
    this.newEntry.listId = list;
    this.entryService.createEntry(this.newEntry).subscribe(()=> {
      this.newEntry = {url:"", titleFile:"", comment:""};
    });
  }
}

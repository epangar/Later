import { Component, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  newEntry: any = {};
  lists: Array<any> = [];
  lists2: Array<any> = [];


  constructor(public entryService: EntryService, public listService: ListService) { 
    this.listService.getList().subscribe(p => {
      this.lists = p;
    });
  }

  ngOnInit() {
    this.listService.getList().subscribe(q => {
      this.lists2 = q;
      this.lists2.shift();
    });
  }
  
  createEntry() {
    this.entryService.createEntry(this.newEntry).subscribe();
  }
}

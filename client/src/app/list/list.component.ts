import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { EntryService } from '../services/entry.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists: Array<any> = [];
  entries: any;

  constructor(
    public sessionService: SessionService, 
    public listService: ListService, 
    public entryService: EntryService, 
    public router: Router) 
    { 
    if (!this.sessionService.user) {
      this.router.navigate(['']);
    }
    this.listService.listEvent.subscribe(l => {
      this.lists = l;
    })
    
  }

  ngOnInit() {
    this.getLists();
  }


  getLists() {
    this.listService.getList().subscribe(p => this.lists = p);
  }

  getEntries(id) {
    this.entryService.getListOfEntries(id).subscribe(p => {
      console.log(p)
      this.entryService.entries = p});
  }

  //DELETE LIST
  removeList(id) {
    console.log(id)      
    this.listService.removeList(id).subscribe(() => this.getLists());
  }
}
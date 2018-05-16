import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';
import { EntryService } from './services/entry.service';
import { ListService } from './services/list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Later';
  newList : any = []
  

  constructor(public sessionService: SessionService, public listService: ListService, public entryService: EntryService) {
  
  }

  ngOnInit() {  }

  createList() {
    this.listService.createList(this.newList).subscribe();
  }

  
}

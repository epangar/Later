import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';
import { EntryService } from './services/entry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Later';
  newEntry: any = {};

  constructor(public sessionService: SessionService, public entryService: EntryService) {
  
  }

  ngOnInit() {}

  createEntry() {
    this.entryService.createEntry(this.newEntry).subscribe();
  }
}

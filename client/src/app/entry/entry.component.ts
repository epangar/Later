import { Component, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  entries: Array<any> = [];

  constructor(public sessionService: SessionService, public entryService: EntryService, public router: Router) { 
    if (!this.sessionService.user) {
      this.router.navigate(['']);
    }
    
  }

  ngOnInit() {
  this.getEntries();
  }

  getEntries() {
    this.entryService.getListOfEntries().subscribe(p => this.entries = p);
  }

  //DELETE ENTRY
  removeEntry(id) {
    console.log(id)
    this.entryService.removeEntry(id).subscribe(p => this.getEntries())
    }
}
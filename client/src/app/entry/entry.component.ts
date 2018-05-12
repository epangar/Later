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
  lists: Array<any> = [];

  constructor(public sessionService: SessionService, public entryService: EntryService, public router: Router) { 
    if (!this.sessionService.user) {
      this.router.navigate(['']);
    }
    
  }

  ngOnInit() {
    this.entryService.getList().subscribe(p => this.lists = p);
  }
}
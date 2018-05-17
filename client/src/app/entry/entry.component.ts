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
  listId;
  clicked: boolean = false;

  constructor(
    public sessionService: SessionService, 
    public entryService: EntryService, 
    public router: Router) { 
    if (!this.sessionService.user) {
      this.router.navigate(['']);
    }    
  }

  ngOnInit() {
    //this.newEntry = {url:"", titleFile:"", comment:""};

  }


//GET A SINGLE ENTRY (PREVIEW)

  getEntry(id) {
    console.log(this.clicked)
    this.clicked = true;
    this.entryService.getEntry(id).subscribe(p => {
      this.entryService.preview = p;
      console.log("ENTRADA "+id);
      this.clicked = false;

    });
  }

  //DELETE ENTRY
   removeEntry(id) {
    this.listId = this.entryService.entries[0].listId;
    this.entryService.removeEntry(id).subscribe(() => {
      this.entryService.getListOfEntries(this.listId).subscribe(p => {
        this.entryService.entries = p
      });
    }) 
  }
}
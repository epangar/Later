import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { EntryService } from '../services/entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  entry: any;
  clicked: boolean = false;

  constructor(
    public sessionService: SessionService, 
    public entryService: EntryService, 
    public router: Router) { }

  ngOnInit() {
  }

  getEntry(id) {
    this.clicked = true;
    this.entryService.getEntry(id).subscribe(p => {
      this.entryService.preview = p;
    });
  }

  }




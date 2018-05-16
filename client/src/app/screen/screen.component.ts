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

  constructor(
    public sessionService: SessionService, 
    public entryService: EntryService, 
    public router: Router) { }

  ngOnInit() {
  }

  getPreview(id) {
    this.entryService.getEntry(id).subscribe(p => this.entry = p);
    console.log("Imprimir el preview" + this.entry)
  }
}

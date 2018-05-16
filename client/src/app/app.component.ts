import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title: string = 'Later';
  // newList : any = []
  

  constructor(public sessionService: SessionService) {
  
  }

  ngOnInit() {  }

  // createList() {
  //   this.listService.createList(this.newList).subscribe();
  // }

  
}

import { Component, OnInit } from '@angular/core';
import { Address } from 'angular-google-place';
import { SessionService } from '../services/session.service';
import { EntryService } from '../services/entry.service';
import { Router } from '@angular/router';
import { ViewChild } from "@angular/core";
import {} from "@types/googlemaps";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  entry: any;
  

  constructor(public sessionService: SessionService, public entryService: EntryService, public router: Router) { }

  @ViewChild("gmap") gmapElement: any;
  map: google.maps.Map;
  
  isTracking = true;

  destination = {
    address: ""
  };

  currentLat: any;
  currentLong: any;

  marker: google.maps.Marker;

  ngOnInit() {

    this.sessionService.isLoggedIn().subscribe((u)=>{
      

    })



/*    
     
    var url = this.entryService.entry.url;
    
  function getCoord(url) {
  

  var splitUrl = url.split('@');
  var coords = splitUrl[1].split(',');

  var lat = coords[0]; // 12.974267
  var lng = coords[1]; // 80.2238546

  return [lat,lng]
} */



var mapProp = {
  center: new google.maps.LatLng(40.4169473,-3.7057172),
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }
}
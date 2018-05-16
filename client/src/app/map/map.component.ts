import { Component, OnInit } from '@angular/core';
import { Address } from 'angular-google-place';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { ViewChild } from "@angular/core";
import {} from "@types/googlemaps";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public sessionService: SessionService, public router: Router) { }

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

    var mapProp = {
      center: new google.maps.LatLng(40.3900552, -3.6959172),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);



  
  }
}
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SpotService } from 'src/app/services/spot.service';
import { SurflineSpot, } from '../../model/spotModel';
import { } from 'googlemaps';

// declare const google: any;
// let map: any;
// let infowindow: any;
// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

@Component({
  selector: 'app-nearby-spots',
  templateUrl: './nearby-spots.component.html',
  styleUrls: ['./nearby-spots.component.scss']
})
export class NearbySpotsComponent implements OnInit {
  @Input() spot: SurflineSpot;
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  infowindow = new google.maps.InfoWindow();

  constructor(private spotService: SpotService) { }

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(this.spot.location.spot.lat, this.spot.location.spot.lon),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.addMarker(this.spot.location.spot.lat, this.spot.location.spot.lon, this.spotService.selectedSpot.spotName);
    this.nearbySearch(this.spot.location.spot.lat, this.spot.location.spot.lon);
  }

  public nearbySearch(latitude: number, longitude: number) {
    const service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: { lat: latitude, lng: longitude },
      radius: 150,
      type: 'store',
      keyword: 'surf'
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          console.log(results[i]);
        }
      }
    });
  }

  public addMarker(latitude: number, longitude: number, markerTitle: string) {
    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: this.map,
      title: markerTitle
    });
  }
}

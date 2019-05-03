import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { SurflineSpot, } from '../../model/spotModel';
import { } from 'googlemaps';

@Component({
  selector: 'app-nearby-spots',
  templateUrl: './nearby-spots.component.html',
  styleUrls: ['./nearby-spots.component.scss']
})
export class NearbySpotsComponent implements OnInit {
  @Input() spot: SurflineSpot;
  @ViewChild('map') mapElement: ElementRef;
  map: google.maps.Map;
  public nearbyPlaces = [];

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
      radius: 1000,
      // type: 'store',
      keyword: 'surf'
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < results.length; i++) {
          this.nearbyPlaces.push(results[i]);
          this.addMarker(results[i].geometry.location.lat(), results[i].geometry.location.lng(), results[i].name);
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

  // public addMarkerOnMouseover(event: Event, lat: number, lon: number, title: string) {
  //   this.addMarker(lat, lon, title);
  // }
}

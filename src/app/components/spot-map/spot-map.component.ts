import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { LambdaResponse } from '../../model/spotModel';

@Component({
  selector: 'app-spot-map',
  templateUrl: './spot-map.component.html',
  styleUrls: ['./spot-map.component.scss']
})
export class SpotMapComponent implements OnInit {
  map: google.maps.Map;
  private markers = [];
  private infowindow = new google.maps.InfoWindow({});
  @ViewChild('map') mapElement: ElementRef;
  private spots = [];
  private html = "";

  constructor(private spotService: SpotService) { }

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(50.73841, -4.0016),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

    this.getAllSpotsAndAddMarkers();
  }

  private addMarker(latitude: number, longitude: number, markerTitle: string) {
    // create marker
    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: this.map,
      title: markerTitle
    });
    // add click listener to each marker
    marker.addListener('click', () => {
      this.openInfoWindow(markerTitle);
    });
    // push each marker to array
    this.markers.push({
      name: markerTitle,
      marker
    });
  }

  private openInfoWindow(title: string): void {
    this.markers.forEach(markerObj => {
      if (title === markerObj.name) {
        this.infowindow.open(this.map, markerObj.marker);
        this.infowindow.setContent(title);
      }
    });
  }

  private getAllSpotsAndAddMarkers(): void {
    this.spotService.getSpotsLambda().subscribe((res: LambdaResponse) => {
      this.spots = JSON.parse(res.body);
      this.spots.forEach(spot => {
        this.placeSearch(spot.googleId);
      });
    });
  }

  private placeSearch(placeId: string): void {
    const service = new google.maps.places.PlacesService(this.map);
    service.getDetails({
      placeId
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.addMarker(results.geometry.location.lat(), results.geometry.location.lng(), results.name);
      }
    });
  }
}

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { SurflineSpot, } from '../../model/spotModel';
import { } from 'googlemaps';
// import 'hammerjs'; for swipe on touch screen but won't deploy
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { faRulerVertical } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-nearby-spots',
  templateUrl: './nearby-spots.component.html',
  styleUrls: ['./nearby-spots.component.scss']
})
export class NearbySpotsComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faRulerVertical = faRulerVertical;
  faWind = faWind;
  faWater = faWater;
  faArrowsAltV = faArrowsAltV;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  modalGalleryOptions: NgxGalleryOptions[];
  modalGalleryImages: NgxGalleryImage[];
  @Input() spot: SurflineSpot;
  @ViewChild('map') mapElement: ElementRef;
  map: google.maps.Map;
  public nearbyPlaces = [];
  public photosLoaded = false;
  public modalPhotosLoaded = false;
  private markers = [];
  private infowindow = new google.maps.InfoWindow({});
  public selectedPlace: any;
  public placeDetails: any;

  constructor(private spotService: SpotService) { }

  ngOnInit() {
    this.galleryImages = [];
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.modalGalleryImages = [];
    const mapProperties = {
      center: new google.maps.LatLng(this.spot.location.spot.lat, this.spot.location.spot.lon),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.addMarker(this.spot.location.spot.lat, this.spot.location.spot.lon, this.spotService.selectedSpot.spotName);
    this.nearbySearch(this.spot.location.spot.lat, this.spot.location.spot.lon);
    this.placeSearch();
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
          if (this.nearbyPlaces.length < 12) {
            this.nearbyPlaces.push(results[i]);
            this.addMarker(results[i].geometry.location.lat(), results[i].geometry.location.lng(), results[i].name);
          }
        }
      }
    });
  }
  private placeSearch(): void {
    const service = new google.maps.places.PlacesService(this.map);
    service.getDetails({
      placeId: this.spotService.selectedSpot.googleId
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.photos.forEach(photo => {
          this.galleryImages.push({
            small: photo.getUrl({ maxWidth: 100, maxHeight: 100 }),
            medium: photo.getUrl({ maxWidth: 500, maxHeight: 500 }),
            big: photo.getUrl({ maxWidth: 1000, maxHeight: 1000 })
          });
          this.photosLoaded = true;
        });
      }
    });
  }

  public detailsSearch(): void {
    this.modalGalleryImages = [];
    this.modalPhotosLoaded = false;
    const service = new google.maps.places.PlacesService(this.map);
    service.getDetails({
      placeId: this.selectedPlace.place_id
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.placeDetails = results;
        console.log(this.placeDetails);
        results.photos.forEach(photo => {
          this.modalGalleryImages.push({
            small: photo.getUrl({ maxWidth: 100, maxHeight: 100 }),
            medium: photo.getUrl({ maxWidth: 500, maxHeight: 500 }),
            big: photo.getUrl({ maxWidth: 1000, maxHeight: 1000 })
          });
        });
        this.modalPhotosLoaded = true;
      }
    });
  }

  public addMarker(latitude: number, longitude: number, markerTitle: string) {
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

  public openInfoWindow(title: string): void {
    this.markers.forEach(markerObj => {
      if (title === markerObj.name) {
        this.infowindow.open(this.map, markerObj.marker);
        this.infowindow.setContent(title);
      }
    });
  }

  // public addMarkerOnMouseover(event: Event, lat: number, lon: number, title: string) {
  //   this.addMarker(lat, lon, title);
  // }
}

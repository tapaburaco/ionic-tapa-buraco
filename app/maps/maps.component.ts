import { Component } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapOptions, Environment } from '@ionic-native/google-maps';

declare const google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html'
})
export class MapsComponent{
  
  map: GoogleMap;

  constructor() {
    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    this.loadMap();
  }


  loadMap(){

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBA8W-66aghPeIqcwdzAluNIfadrB82EHc',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBA8W-66aghPeIqcwdzAluNIfadrB82EHc'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }
}
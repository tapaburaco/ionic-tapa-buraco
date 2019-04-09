import { Component } from '@angular/core';
import { GoogleMaps, GoogleMap, Environment } from '@ionic-native/google-maps';

declare const google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps/maps.component'
})
export class MapsComponent{
  
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBA8W-66aghPeIqcwdzAluNIfadrB82EHc',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBA8W-66aghPeIqcwdzAluNIfadrB82EHc'
    });

    this.map = GoogleMaps.create('map_canvas');
  }
}
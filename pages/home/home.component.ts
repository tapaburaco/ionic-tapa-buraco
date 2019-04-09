import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, Environment } from '@ionic-native/google-maps';

import { DenunciaComponent } from '../denuncia/denuncia.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  map: GoogleMap;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
/*
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBA8W-66aghPeIqcwdzAluNIfadrB82EHc',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBA8W-66aghPeIqcwdzAluNIfadrB82EHc'
    });
*/
    this.map = GoogleMaps.create('map_canvas');
  }

  onButtonClick(){
    
    this.navCtrl.push(DenunciaComponent);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, Environment } from '@ionic-native/google-maps';
//------------testes---------------------------//
import { ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
//---------------------------------------------------------//
import { DenunciaComponent } from '../denuncia/denuncia.component';

declare const google;

@IonicPage()
@Component({
  selector: 'app-home',
  templateUrl: 'home.html'
})
export class HomeComponent {
  

  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

/*  map: GoogleMap;

  constructor(public navCtrl: NavController) {}
*/
  /*ionViewDidLoad(){
    this.loadMap();
  }*/
  ionViewDidLoad() {
    // start my map
    let posMaceio = { lat: -9.648139, lng: -35.717239 }
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 8,
      center: posMaceio,
      mapTypeId: 'roadmap'
    });
    this.map.setCenter(posMaceio);
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

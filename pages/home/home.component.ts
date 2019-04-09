import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//------------testes---------------------------//
import { ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
//---------------------------------------------------------//
import { DenunciaComponent } from '../denuncia/denuncia.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  onButtonClick(){
    
    this.navCtrl.push(DenunciaComponent);
  }
}

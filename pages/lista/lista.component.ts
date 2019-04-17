import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from 'ionic-angular';

import { AngularFirestore } from '@angular/fire/firestore';

import { Denuncia } from '../../app/model/denuncia';

@Component({
  selector: 'app-lista',
  templateUrl: '/lista.component.html'  
})
export class ListaComponent {

  public lista: Observable<any[]>;

  constructor(
    public db: AngularFirestore,
    public navCtrl: NavController)
  {
    this.lista = db.collection("usuario").valueChanges();
  }

}
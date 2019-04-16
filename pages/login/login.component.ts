import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from 'ionic-angular';

import { HomeComponent } from '../home/home.component';
import { Usuario } from '../../app/model/usuario';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor( 
    public auth: AngularFireAuth,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) 
  {}

  usuario: Usuario;

  public login = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  });
  
  singIn(){

    let email = this.login.value.email;
    let senha = this.login.value.senha;
    
    this.auth
    .auth
    .signInWithEmailAndPassword(email, senha)
    .then(value => {
      console.log('Bom, funcionou!');
    })
    .catch(err => {
      console.log('Algo deu errado:',err.message);
    });
    
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { HomeComponent } from '../home/home.component';
import { Usuario } from '../../app/model/usuario';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    public db: AngularFirestore,
    public navCtrl: NavController,
    public aAuth: AngularFireAuth
  ) 
  {}

  usuario:  Observable<Usuario>;

  public login = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  });
  
  entrar(){
    let email = this.login.value.email;
    let senha = this.login.value.senha;

    this.aAuth.auth.signInWithEmailAndPassword(email, senha)
      .then((user) => {
        this.usuario = this.db.collection("usuario", ref => 
        ref.where("UID", "==", user.user.uid)).valueChanges();        
        console.log(user.user.uid)
        //this.navCtrl.push(HomeComponent);
        //OkQquDnODraq4t9DHC3ArdmJqqk2
      })
      .catch((error) => {
        alert(error.message)
      });
  }

}
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { HomeComponent } from '../home/home.component';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(public navCtrl: NavController,
              public aAuth: AngularFireAuth) 
  { }

  public login = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  });
  
  entrar(){
    let email = this.login.value.email;
    let senha = this.login.value.senha;

    this.aAuth.auth.signInWithEmailAndPassword(email, senha)
      .then((user) => {
        console.log(user.additionalUserInfo.providerId)
        console.log(user.additionalUserInfo.isNewUser)
        console.log(user.additionalUserInfo.profile)
        console.log(user.additionalUserInfo.username)
        //this.navCtrl.push(HomeComponent);
      })
      .catch((error) => {
        alert(error.message)
      });
  }

}
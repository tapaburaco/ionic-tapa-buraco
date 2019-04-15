import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';

import { AuthService } from '../../app/core/auth.service';
import { HomeComponent } from '../home/home.component';
import { Usuario } from '../../app/model/usuario';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  authState: any = null;

  constructor( public auth: AuthService,
    public navCtrl: NavController,
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
    
    this.auth.singIn(email, senha);

    this.navCtrl.push(HomeComponent);
    
  }

}
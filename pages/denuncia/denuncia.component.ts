import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html'
})
export class DenunciaComponent {

  public denuncia = new FormGroup({
    usuario: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl(''),
    cpf: new FormControl(''),
    imagens: new FormControl('')
  });

  constructor(public db: AngularFirestore,
              public navCtrl: NavController
  ){}

  enviar() {
    let usuario = this.denuncia.value.usuario;
    let email = this.denuncia.value.email;
    let telefone = this.denuncia.value.telefone;
    let cpf = this.denuncia.value.cpf;
    let imagens = this.denuncia.value.imagens

    let denuncia = {
      usuario: usuario,
      email: email,
      telefone: telefone,
      cpf: cpf,
      imagens: imagens,
      data: new Date().toDateString
    };

    this.db.collection('denuncia').add(denuncia);

    this.navCtrl.pop();
  }

}
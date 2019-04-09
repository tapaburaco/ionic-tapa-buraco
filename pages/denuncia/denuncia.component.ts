import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html'
})
export class DenunciaComponent{

  public form = new FormGroup({
    usuario: new FormControl(''),
    email: new FormControl(''),
    telfone: new FormControl(''),
    cpf: new FormControl(''),
    imagens: new FormControl('')
  });

  constructor(public db: AngularFirestore, public navCtrl: NavController){}

  enviar(){
    
    let usuario = this.form.value.usuario;
    let email = this.form.value.email;
    let telefone = this.form.value.telefone;
    let cpf = this.form.value.cpf;
    let imagens = this.form.value.imagens

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
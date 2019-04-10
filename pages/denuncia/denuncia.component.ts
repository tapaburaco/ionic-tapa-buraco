import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

import { Denuncia } from '../../model/Denuncia';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html'
})
export class DenunciaComponent {

  denuncia: Denuncia;

  public form = new FormGroup({
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

    this.denuncia.usuario = this.form.value.usuario;
    this.denuncia.email = this.form.value.email;
    this.denuncia.telefone = this.form.value.telefone;
    this.denuncia.cpf = this.form.value.cpf;
    //this.denuncia.imagens = this.form.value.imagens
    this.denuncia.data = new Date().toDateString;

    this.db.collection('denuncia').add(this.denuncia);

    this.navCtrl.pop();
  }

}
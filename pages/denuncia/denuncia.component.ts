import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html'
})
export class DenunciaComponent{

  public denuncia = new FormGroup({
    usuario: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl(''),
    cpf: new FormControl(''),
    imagens: new FormControl('')
  });

  constructor(public db: AngularFirestore, 
              public navCtrl: NavController,
              private camera: Camera){ }

  public options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  enviar(){
  
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      // Handle error
    }); 
    
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
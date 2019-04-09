import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
import { MyApp } from './app.component';
import  { AngularFireModule } from '@angular/fire';
import  { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

//-------------PAGES---------------------//
import { HomePage } from '../pages/home/home.component';
import { DenunciaComponent } from '../pages/denuncia/denuncia.component';

// Configurações do Firebase:
const config = {
   apiKey: "AIzaSyBQayXeIPkjnSrRPDxAizpNZP9gozAaRUI",
    authDomain: "tapaburaco-ff7be.firebaseapp.com",
    databaseURL: "https://tapaburaco-ff7be.firebaseio.com",
    projectId: "tapaburaco-ff7be",
    storageBucket: "tapaburaco-ff7be.appspot.com",
    messagingSenderId: "661400464248"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DenunciaComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DenunciaComponent
  ],
  providers: [
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

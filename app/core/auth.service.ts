import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Usuario } from '../model/usuario';

@Injectable()
export class AuthService {

 authState: any = null;

  constructor(
    public db: AngularFirestore,
    public aAuth: AngularFireAuth
  ) 
  {
     aAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUser(): any {
    return this.authenticated ? this.authState.auth : null;
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signOut(): void {
    this.aAuth.auth.signOut();
  }

  signIn(email, senha){
    this.aAuth.auth.signInWithEmailAndPassword(email, senha)
    .then((ref) => {
      this.authState = ref.user
    })
    .catch((error) => {
      alert(error.message)
    });
  }



}
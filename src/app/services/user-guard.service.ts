import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from '@angular/fire/auth';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements OnInit {

  constructor(private auth: Auth, private ath: AngularFireAuth) { }
  ngOnInit(): void {
  }

  //Registrar Usuario
  isRegisterUser(user : Users) {
    return this.ath.createUserWithEmailAndPassword(user.correo, user.contraseña)
    // return createUserWithEmailAndPassword(this.auth, email, password)
  }

  //Para iniciar sesion
  isLogin({ email, password }: any) {
    return this.ath.signInWithEmailAndPassword(email, password)
    // return signInWithEmailAndPassword(this.auth, email, password)
  }

  // Para cerrar sesion
  isLogOut() {
    this.ath.signOut()
    // return signOut(this.auth) 
  }

  //para saber el estado del user
  stateUSer(){
   return this.ath.authState
  }
}


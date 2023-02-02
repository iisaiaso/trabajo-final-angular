import { Injectable, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements OnInit {

  constructor(private auth: Auth) { }
  ngOnInit(): void {
  }
  isRegisterUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
  
  isLogin({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  isLogOut() {
    return signOut(this.auth)
  }
}


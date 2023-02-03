import { Injectable } from '@angular/core';
import { doc, Firestore, setDoc, } from '@angular/fire/firestore';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: Firestore) { }

  // Agregar un usuario
  addUSer(user: any, path: string, id: string): Promise<void> {
    const docRef = doc(this.fireStore, path, id)
    return setDoc(docRef, user)
  }
}

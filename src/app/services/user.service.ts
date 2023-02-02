import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore:Firestore) { }

  // Agregar un usuario
  addProduct(user:Users){
    const productoRef = collection(this.fireStore, 'users')
    return addDoc(productoRef,user)
  }
}

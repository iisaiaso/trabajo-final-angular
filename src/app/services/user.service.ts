import { User } from './../interface/users';
import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, setDoc, } from '@angular/fire/firestore';
import { Users } from '../interface/users';
import { Observable } from 'rxjs';

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
 
  getUser(id:string, path:string): Observable<User[]> {
    const refProduct = collection(this.fireStore, path)
    return collectionData(refProduct, { idField: id }) as Observable<User[]>
  }
}

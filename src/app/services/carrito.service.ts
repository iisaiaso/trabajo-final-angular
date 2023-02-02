import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Carrito } from '../interface/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private fireStore:Firestore) { }

  
  //  Servicio para mostrar pedidos desde la base de datos
  getAllPedido(): Observable<Carrito[]> {
    const refProduct = collection(this.fireStore, 'pedidos')
    return collectionData(refProduct, { idField: 'id' }) as Observable<Carrito[]>
  }
  
  // SErivicio para agregar pedidos
  addPedido(producto:Carrito){
    const productoRef = collection(this.fireStore, 'pedidos')
    return addDoc(productoRef,producto)
  }
}

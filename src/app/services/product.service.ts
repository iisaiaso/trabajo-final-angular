import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Productos } from '../interface/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fireStore: Firestore) { }

  //  Servicio para mostrar productos desde la base de datos
  getAllProduct(): Observable<Productos[]> {
    const refProduct = collection(this.fireStore, 'productos')
    return collectionData(refProduct, { idField: 'id' }) as Observable<Productos[]>
  }
  
  // SErivicio para agregar productos
  addProduct(producto:Productos){
    const productoRef = collection(this.fireStore, 'productos')
    return addDoc(productoRef,producto)
  }

  //Eliminar Productos
  deleteProduct(producto:Productos){
    const productoRef = doc(this.fireStore,'productos/'+producto.id)
    return deleteDoc(productoRef)
  }
}

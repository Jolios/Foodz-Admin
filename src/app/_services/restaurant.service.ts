import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Restaurant } from '../_models/restaurant'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurantsCollection: AngularFirestoreCollection<Restaurant>;
  restaurants: Observable<Restaurant[]>;

  constructor(public db: AngularFirestore) { 
    this.restaurants = this.db.collection('restaurant').valueChanges();
  }

  getRestaurant(){
    return this.restaurants;
  }

}


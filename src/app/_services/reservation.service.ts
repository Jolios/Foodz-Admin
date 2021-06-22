import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Reservation } from '@app/_models/reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservationCollection: AngularFirestoreCollection<Reservation>;
  reservations:Observable<Reservation[]>;
  
  constructor(public db:AngularFirestore) { 
    this.reservations = this.db.collection("reservation").valueChanges();
  }
  getReservations(){
    return this.reservations;
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Review } from '@app/_models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewCollection:AngularFirestoreCollection<Review>;
  reviews:Observable<Review[]>;

  constructor(public db:AngularFirestore) {
    this.reviews = this.db.collection("review").valueChanges();
  }

  getReviews(){
    return this.reviews;
  }
}

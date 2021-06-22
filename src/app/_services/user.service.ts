import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '@app/_models/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    usersCollection: AngularFirestoreCollection<User>;
    users: Observable<User[]>;

    constructor(public db:AngularFirestore) {
        this.users = this.db.collection("users").valueChanges();
    }

    getUsers(){
        return this.users;
    }

    
}
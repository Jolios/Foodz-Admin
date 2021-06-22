import firebase from 'firebase/app';

export interface Reservation{
    id?:string;
    people?:string;
    reservationDay?:firebase.firestore.Timestamp;
    reservationTime?:string;
    restoId?:string;
    sent?:firebase.firestore.Timestamp;
    state?:string;
}
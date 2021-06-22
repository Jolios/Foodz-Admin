import firebase from 'firebase/app'
export interface Review{
    id?:string;
    description?:string;
    posted?:firebase.firestore.Timestamp;
    restoId?:string;
    stars?:number;
    userId?:string;
}
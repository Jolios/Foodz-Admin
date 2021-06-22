import firebase from 'firebase/app';

export interface User{
  id?:string;
  birthDate?: firebase.firestore.Timestamp;
  created?:firebase.firestore.Timestamp;
  email?:string;
  gender?:string;
  image?:string;
  phone?:string;
  username?:string;
}
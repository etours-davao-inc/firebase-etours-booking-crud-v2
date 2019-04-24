import * as firebase from 'firebase/app';

import "firebase/firestore";

import { dbName, fireBaseConfig } from './config';

firebase.initializeApp(fireBaseConfig);

const db = firebase.firestore().collection(dbName)

export const sendReservation = payload => db.add(payload);
export const getReservations = () => db.get()
export const getReservation = (id) => db.doc(id).get()
import { sendReservation, getReservations, getReservation } from './index';

const payload = {
  name: 'Tom Claudio',
  text: 'The creator'
}

sendReservation(payload).then( docRef => {
  console.log('Document written with ID: ', docRef.id)
}).catch( error => {
  console.log('Error adding document: ', error)
})

getReservations(10).then( querySnapshot => {
  querySnapshot.forEach(element => {
    console.log(element.id, '=>', element.data())
  });
}).catch( error => {
  console.log("Error while getting data: ", error)
})

const id = 'lwkmZSOwA2FYcE91Nr1K'

getReservation(id).then(doc => {
  if (doc.exists) {
    console.log("----------------")
    console.log(doc.data())
  } else {
    console.log("No record found")
  }
}).catch( error => {
  console.log("Error getting data", error)
})

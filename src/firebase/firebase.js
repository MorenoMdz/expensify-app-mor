import * as firebase from 'firebase';
// takes all the named exports from the firebase module and add to the firebase variable

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     /* make a new array with the key as id and the rest of the values */
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log('removed: ', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log('changed: ', snapshot.key, snapshot.val());
// });
// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       /* make a new array with the key as id and the rest of the values */
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

/* push()  auto generates a randomized id like value */
// database.ref('notes').push({
//   body: 'Course Topis',
//   title: 'New Note',
// });

// database.ref('notes/-LUbw3SZpZrjZ1H1kPVI').remove();

// database.ref('expenses').push({
//   description: 'Rent1',
//   note: '',
//   amount: 109,
//   createdAt: 12133132,
// });

// database.ref('expenses').push({
//   description: 'Rent2',
//   note: '',
//   amount: 1091,
//   createdAt: 12133132,
// });

// database.ref('expenses').push({
//   description: 'Rent3',
//   note: '',
//   amount: 1092,
//   createdAt: 12133132,
// });

// Fetching Data
// database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.company}'s ${val.job.title}`);
// });
/* Runs once */
// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error fetching data', e);
//   });

// /* Subscribes and watches for changes */
// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log('Error with data fetching', e);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(31);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7500);

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 10500);

// database
//   .ref()
//   .set({
//     name: 'Test name',
//     age: 26,
//     job: {
//       title: 'Sw Dev',
//       company: 'Google',
//     },
//     location: {
//       city: 'Phil',
//       country: 'USA',
//     },
//   })
//   .then(() => {
//     console.log('Data is saved!');
//   })
//   .catch(e => {
//     console.log('>>> !!This failed!! <<<.', e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
// });

// database.ref().set('This is my data.');
/* .ref() # refers to the root of the db */
/* .ref('age') # refers to the /age collection  */

// database
//   .ref('attributes/')
//   .set({
//     height: 170,
//     weight: 70,
//   })
//   .then(() => {
//     console.log('second set call worked');
//   })
//   .catch(() => {
//     console.log('Did not work', e);
//   });

// Use 'ref().remove()' to wipe the db
// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('data was removed');
//   })
//   .catch(() => {
//     console.log('No data was removed');
//   });

// You can also use set() passing null to remove data, but remove() is more explicit
// database.ref('isSingle').set(null);

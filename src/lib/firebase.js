const firebaseConfig = {
  apiKey: 'AIzaSyAxKjqTudxBWi9j9i4IDKn450hmM1m_w3A',
  authDomain: 'red-social-coaches.firebaseapp.com',
  projectId: 'red-social-coaches',
  storageBucket: 'red-social-coaches.appspot.com',
  messagingSenderId: '489293961166',
  appId: '1:489293961166:web:e0ae10e7b6db857d26fd9f',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
export const auth = firebase.auth();

export const getPosts = () => database.collection('posts').get()
  .then((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      docs.push(doc.data());
    });
    return docs;
  })
  .catch((error) => {
    console.log('Error getting documents: ', error);
  });

export const getUser = () => firebase.auth().currentUser;

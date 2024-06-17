const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../key.json');

// Inicialize o aplicativo Firebase com o service account
initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://rezendes-modas.firebaseio.com"
});

const db = getFirestore();

module.exports = { db };
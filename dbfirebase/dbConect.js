const admin = require('firebase-admin');
const serviceAccount = require('./firebaseCredentials');

const dbUrl = require('./firebaseURL');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: dbUrl
});

const db = admin.database();

module.exports = db;

const firebase = require('firebase');
const databaseKey = require('./key.json')


const db = firebase.initializeApp(databaseKey)


module.exports = db;
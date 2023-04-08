const databaseKey = require('./key.json')
const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')


initializeApp({
    credential: cert(databaseKey)
})

const db = getFirestore()

module.exports = db 


import * as functions from 'firebase-functions'
const admin = require('firebase-admin')

import ritoApi from './rito-api'

admin.initializeApp(functions.config().firebase)

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

exports.onAccountCreation = functions.auth.user().onCreate(async (user) => {
  const uid = user.uid

  const email = user.email

  const usersCollection = admin.firestore().collection('users')
  await usersCollection.doc(uid).set({
    email: email,
    summoners: [],
  })
})

exports.ritoApi = functions.https.onRequest(ritoApi)

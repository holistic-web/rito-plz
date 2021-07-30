import * as functions from 'firebase-functions'
const admin = require('firebase-admin')

import onAccountCreation from './eventHandlers/onAccountCreation'
import ritoApi from './rito-api'

admin.initializeApp(functions.config().firebase)

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

exports.onAccountCreation = functions.auth.user().onCreate(onAccountCreation)
exports.ritoApi = functions.https.onRequest(ritoApi)

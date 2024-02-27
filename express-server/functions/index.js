/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// eslint-disable-next-line quotes
const { onRequest } = require('firebase-functions/v2/https');
// eslint-disable-next-line quotes
const logger = require('firebase-functions/logger');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// eslint-disable-next-line quotes
const functions = require('firebase-functions');
// // eslint-disable-next-line quotes
const app = require('./index'); // path to your Express app
exports.api = functions.https.onRequest(app);

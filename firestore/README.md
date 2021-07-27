# Firestore

This folder defines the rules and indexes for the Firestore databae.

## CI & Deployment

The following workflows (found in `.github/workflows`) run on this project:

### `deploy_firestore`

Only runs against `main` and deploys the firestore rules and indexes to firebase using the `firebase deploy --only firestore` command.

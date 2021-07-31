# Firestore

This folder defines the rules and indexes for the Firestore database. It also defines the types for the Firestore database collections.

## CI & Deployment

The following workflows (found in `.github/workflows`) run on this project:

### `deploy_firestore`

Only runs against the `main` branch and deploys the firestore rules and indexes to firebase using the `firebase deploy --only firestore` command.

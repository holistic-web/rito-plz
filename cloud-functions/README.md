# Cloud Functions

This folder defines the cloud functions we have set up in Firebase.

| Function          | Description                              | Trigger       |
| ----------------- | ---------------------------------------- | ------------- |
| onAccountCreation | Creates a record in the users collection | first sign in |

## CI & Deployment

The following workflows (found in `.github/workflows`) run on this project:

### `lint_cloud-functions`

Runs against all branches but `main` and runs `npm run lint` and `npm run build` to check that the project conforms to standards and compiles succesfully.

### `deploy_cloud-functions`

Only runs against `main` and deploys the functions to firebase using the `npm run build` and `firebase deploy --only functions` commands.

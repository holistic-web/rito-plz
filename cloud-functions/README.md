# Cloud Functions

This folder defines the cloud functions we have set up in Firebase.

| Function          | Description                              | Trigger       |
| ----------------- | ---------------------------------------- | ------------- |
| onAccountCreation | Creates a record in the users collection | first sign in |
| ritoApi           | Express API to handle serve side logic   | http trigger  |

## Developing Locally

First you'll want to ensure you have the firebase local emulators configured:
https://firebase.google.com/docs/functions/local-emulator#web-v8

_Can you we fill out the command line instructions here?_

1. run the functions emulator:

   ```
   firebase emulators:start --only functions
   ```

2. profit?
   ```
   echo "AndrewIsANoob"
   ```

The http functions will then be available at `localhost:5001/ritoplz/us-central1/{function name}`, eg:

```
localhost:5001/ritoplz/us-central1/ritoApi
```

## CI & Deployment

The following workflows (found in `.github/workflows`) run on this project:

### `lint_cloud-functions`

Runs against all branches but `main` and runs `npm run lint` and `npm run build` to check that the project conforms to standards and compiles succesfully.

### `deploy_cloud-functions`

Only runs against `main` and deploys the functions to firebase using the `npm run build` and `firebase deploy --only functions` commands.

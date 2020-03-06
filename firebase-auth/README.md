# firebase-auth

## Project setup
```
yarn install
```

Include a `.env.local` file (which will not be committed) with the following data from your Firebase console: 

```
VUE_APP_FIREBASE_API_KEY=
VUE_APP_FIREBASE_APP_ID=
VUE_APP_FIREBASE_AUTH_DOMAIN={name}.firebaseapp.com
VUE_APP_FIREBASE_DATABASE_URL=https://{name}.firebaseio.com
VUE_APP_FIREBASE_PROJECT_ID={name}
VUE_APP_FIREBASE_STORAGE_BUCKET=
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

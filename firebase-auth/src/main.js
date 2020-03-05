import Vue from "vue";
import App from "./App.vue";
import * as firebase from "firebase";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "",
  authDomain: "vue-firebase-auth-def4c.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-def4c.firebaseio.com",
  projectId: "vue-firebase-auth-def4c",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(configOptions);

new Vue({
  render: h => h(App)
}).$mount("#app");
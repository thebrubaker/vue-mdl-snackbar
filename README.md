Use `this.$notify(message)` to throw a snackbar notification from anywhere in your Vue app!

Note: this plugin requires that you have the Material Design Lite stylesheet and script in your application.

## To Use

Copy and paste this snippet into your application (hint: I made it a Snackbar.vue component) 
```
<div id="snackbar-notification" class="mdl-js-snackbar mdl-snackbar">
  <div class="mdl-snackbar__text"></div>
  <button class="mdl-snackbar__action" type="button"></button>
</div>
```

Import VueSnackbar into your main.js file
```
import VueSnackbar from 'vue-mdl-snackbar'
```

Install the plugin by running the following in your main.js: 
```
Vue.use(VueSnackbar, '#snackbar-notification')
```

> Run the following on any component to push a snackbar notification
```
this.$notify(message)
```

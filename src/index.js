import Vue from 'vue'

// Extend Vue to include global access to the MDL snackbar
export default function install (Vue, selector) {
  Object.defineProperties(Vue.prototype, {
    $notify: {
      get () {
        // a transient notificaton that displays at the bottom of
        // the screen
        return message => {
          // Select that shit
          let element = document.querySelector(selector)
          element.MaterialSnackbar.showSnackbar({
            message: message
          })
        }
      }
    }
  })
}

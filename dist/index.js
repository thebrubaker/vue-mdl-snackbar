'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Extend Vue to include global access to the MDL snackbar
function install(Vue, selector) {
  Object.defineProperties(Vue.prototype, {
    $notify: {
      get: function get() {
        // a transient notificaton that displays at the bottom of
        // the screen
        return function (message) {
          // Select that shit
          var element = document.querySelector(selector);
          element.MaterialSnackbar.showSnackbar({
            message: message
          });
        };
      }
    }
  });
}
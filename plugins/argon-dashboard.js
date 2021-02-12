import Vue from 'vue';
import './polyfills';
// All global components are imported automatically in nuxt; imports here removed

// element ui language configuration
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

// vue-bootstrap
// BootstrapVue should already be used by nuxt from nuxt.config.
// IconsPlugin should also be tested and these imports removed if unnecessary.
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import { extend, configure } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

// not sure how this would work with i18n
locale.use(lang);

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    // eslint-disable-next-line import/namespace
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'] // multiple classes per flag!
  }
});

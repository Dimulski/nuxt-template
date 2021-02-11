// import Vue from 'vue';

// export default {
//   bind (el, binding, vnode) {
//     el.clickOutsideEvent = function (event) {
//       // here I check that click was outside the el and his childrens
//       if (!(el == event.target || el.contains(event.target))) {
//         // and if it did, call method provided in attribute value
//         vnode.context[binding.expression](event)
//       }
//     }
//     document.body.addEventListener('click', el.clickOutsideEvent)
//   },
//   unbind (el) {
//     document.body.removeEventListener('click', el.clickOutsideEvent)
//   }
// }

// export default ({ app }, directive) => {
//   if (!Vue.__clickOutsideDirective__) {
//     Vue.__clickOutsideDirective__ = true;
//     Vue.directive('click-outside', {
//       bind(el, binding, vnode) {
//         el.clickOutsideEvent = function(event) {
//           // here I check that click was outside the el and his childrens
//           if (!(el == event.target || el.contains(event.target))) {
//             // and if it did, call method provided in attribute value
//             vnode.context[binding.expression](event);
//           }
//         };
//         document.body.addEventListener('click', el.clickOutsideEvent);
//       },
//       unbind(el) {
//         document.body.removeEventListener('click', el.clickOutsideEvent);
//       }
//     });
//   }
// };

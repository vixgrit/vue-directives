import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    let delay = 0;
    if (binding.modifiers['delay']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      }
      else {
        el.style.color = binding.value;
      }
    }, delay);
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

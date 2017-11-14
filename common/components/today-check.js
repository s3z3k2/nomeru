Vue.component("common-today-check", {
  props: ["state"],
  template:`
  <div id="user-today-check" v-if="state == 'show'">
    <img src="img/today-check.png" v-on:click="closeDiv">
  </div>`,
  methods: {
    closeDiv: function () {
      document.getElementById("user-today-check").classList.toggle("user-display-none")
    }
  }
});

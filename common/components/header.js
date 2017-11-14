Vue.component("common-header", {
  props: ["current"],
  template:`
  <div id="user-header">
    <div id="user-header-navToggle" v-if="current == 'havetoken'" v-on:click="openNav">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <img id="user-header-logo" src="img/logo.svg" v-on:click="goindex">
    <img id="user-header-login" src="img/header-login-button.svg" v-if="current == 'donthavetoken'" v-on:click="login">
    <img id="user-header-login" src="img/header-logout-button.svg" v-if="current == 'havetoken'" v-on:click="logout">
  </div>`,
  methods: {
    openNav: function () {
      document.getElementById("user-menu").classList.toggle("openNav")
    },
    logout: function() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      location.href= "./index.html";
    },
    login: function() {
      location.href = "./login.html"
    },
    goindex: function() {
      location.href = "./index.html"
    }
  }
});

Vue.component("common-menu", {
  props: ["current"],
  template:`
  <div id="user-menu">

      <div class="right" v-on:click="closeNav">
        <span>×</span>
      </div>

      <div class="left">
        <p v-on:click="gohome"><i class="home icon"></i><span>ホーム</span></p>
        <p v-on:click="goprofile"><i class="user icon"></i><span>会員情報</span></p>
        <p v-on:click="gocolumn"><i class="book icon"></i><span>コラム</span></p>
      </div>

      <div class="logout">
        <p v-on:click="logout">
          <img src="img/logout-icon.svg">
          <span>ログアウト</span>
        </p>
      </div>

  </div>`,
  methods: {
    closeNav: function () {
      document.getElementById("user-menu").classList.toggle("openNav")
    },
    gohome: function() {
      location.href = "./home.html";
    },
    goprofile: function() {
      location.href = "./profile.html";
    },
    gocolumn: function() {
      location.href = "./column.html";
    },
    logout: function() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      location.href= "./index.html";
    }
  }
});

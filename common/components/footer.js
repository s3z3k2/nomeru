Vue.component("common-footer", {
  template:`
  <div id="user-footer">
    <img src="img/footer-logo.svg">
    <div>
      <ul>
        <li v-on:click="gohome">ホーム</li>
        <li v-on:click="gocolumn">コラム</li>
        <li v-on:click="goindex">お問い合わせ</li>
        <li v-on:click="goindex">利用規約</li>
        <li v-on:click="goindex">運営会社</li>
        <li v-on:click="goindex">プライバシーポリシー</li>
      </ul>
    </div>
    <p>© MTI-dev-intern4-teamB</p>
  </div>`,
  methods: {
    gohome: function() {
      if (localStorage.getItem("token") && localStorage.getItem("userId")) {
        location.href = "./home.html";
      } else {
        location.href = "./login.html";
      }
    },
    gocolumn: function() {
      if (localStorage.getItem("token") && localStorage.getItem("userId")) {
        location.href = "./column.html";
      } else {
        location.href = "./login.html";
      }
    },
    goindex: function() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      location.href = "./index.html";
    }
  }
});

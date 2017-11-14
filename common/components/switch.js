Vue.component("common-switch", {
  props: ["current"],
  template:`
  <div id="user-change">
  <div class="buttondiv">
    <button class="putbutton" type="submit" v-bind:class="{putbutton2: current == 'home'}" v-on:click="gohome">
        ホーム
    </button>
  </div>
  <div class="buttondiv">
    <button class="putbutton" type="submit" v-bind:class="{putbutton2: current == 'day'}" v-on:click="godayregist">
        飲み会を登録
    </button>
  </div>
  </div>`,
  methods: {
    gohome: function() {
      location.href = "./home.html";
    },
    godayregist: function() {
      location.href = "./nomeru-Dayregist.html";
    }
  }
});

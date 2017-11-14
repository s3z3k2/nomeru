var vm = new Vue({
  el: "#app", // Vue.jsを使うタグのIDを指定
  data: {
    // Vue.jsで使う変数はここに記述する
    mode : ""
  },
  methods: {
    // Vue.jsで使う関数はここで記述する
    reset: function() {
      vm.mode = "";
    },
    move1: function() {
      vm.mode = "article1";
    },
    move2: function() {
      vm.mode = "article2";
    },
    move3: function() {
      vm.mode = "article3";
    },
    move4: function() {
      vm.mode = "article4";
    },
    move5: function() {
      vm.mode = "article5";
    },
    move6: function() {
      vm.mode = "article6";
    },
    move7: function() {
      vm.mode = "article7";
    },
    move8: function() {
      vm.mode = "article8";
    },
    move9: function() {
      vm.mode = "article9";
    },
    move10: function() {
      vm.mode = "article10";
    },
    move11: function() {
      vm.mode = "article11";
    }
  },
  created: function() {
    // Vue.jsの読み込みが完了したときに実行する処理はここに記述する

  },
  computed: {
    // 計算した結果を変数として利用したいときはここに記述する

  }
});

let vm = new Vue({
    el: '#app',
    data: {
        weeks : ['日', '月', '火', '水', '木', '金', '土'],
        calData : {year: 0, month: 0},
        plan : {
          datetime : null,
          category : null,
          planday : null,
          planmonth : null,
          planyear : null,
          planhour : null,
          planminute : null
        },
        schedule:[],
        tmpe : null
    },
    created: function (){
      if (!localStorage.getItem("token") || !localStorage.getItem("userId")) {
        location.href = "./login.html"
      }

        var date = new Date();
        this.calData.year = date.getFullYear();
        this.plan.planyear = date.getFullYear();
        this.calData.month = date.getMonth() + 1;
        this.plan.planmonth = date.getMonth() + 1;

          // APIにGETリクエストを送る
          fetch(url + "/nomeru-drinkingparty" +
              "?userId=" + localStorage.getItem("userId"), {
              method: "GET",
              headers: new Headers({
                "Authorization": localStorage.getItem("token")
              })
            })
            .then(function(response) {
              if (response.status == 200) {
                return response.json();
              }
              // 200番以外のレスポンスはエラーを投げる
              return response.json().then(function(json) {
                throw new Error(json.message);
              });
            })
            .then(function(json) {
              // レスポンスが200番で返ってきたときの処理はここに記述する
              //console.log(json);
              vm.schedule = json;
              let monthSchedule = json.filter((e)=>{
                const year = e.datetime.substr(0,4);
                const month = e.datetime.split('/')[1];
                // console.log(year+month);
                return (vm.calData.year == year) && (vm.calData.month == month)
              });

              const calendarTable = document.querySelectorAll('#calendar td');
              //console.log(calendarTable);

              monthSchedule.forEach((val)=>{
                  const tempDate = (val.datetime.split('/')[2]).split(' ')[0];
                  calendarTable.forEach((e)=>{
                    // console.log(e.textContent +':' + tempDate);
                    if(tempDate == e.textContent) {
                      e.setAttribute('style', 'background-color:#F4D12D');
                    }
                  })
              });
            })
            .catch(function(err) {
              console.log(err);
              // レスポンスがエラーで返ってきたときの処理はここに記述する
            });
    },
    methods: {
        submit: function() {
          // APIにPOSTリクエストを送る
          fetch(url + "/nomeru-drinkingparty", {
              method: "POST",
              headers: new Headers({
              "Authorization": localStorage.getItem("token")
              }),
              body: JSON.stringify({
                "userId" : localStorage.getItem("userId"),
                "year" : Number(this.plan.planyear),
                "month" : Number(this.plan.planmonth),
                "day" : Number(this.plan.planday),
                "hour" : Number(this.plan.planhour),
                "minute" : Number(this.plan.planminute),
                "category" : this.plan.category
              })
            })
            .then(function(response) {
              if (response.status == 200) {
                return response.json();
              }
              // 200番以外のレスポンスはエラーを投げる
              return response.json().then(function(json) {
                throw new Error(json.message);
              });
            })
            .then(function(json) {
              // レスポンスが200番で返ってきたときの処理はここに記述する
              var content = JSON.stringify(json, null, 2);
              vm.tmpe.setAttribute('style', 'background-color:#F4D12D');
              vm.plan.datetime = "";
              vm.plan.category = "";
            })
            .catch(function(err) {
              // レスポンスがエラーで返ってきたときの処理はここに記述する
            });
        },
        getMonthName: function(month) {
            var monthName = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
            return monthName[month - 1];
        },
        moveLastMonth: function() {
          // APIにGETリクエストを送る
          fetch(url + "/nomeru-drinkingparty" +
              "?userId=" + localStorage.getItem("userId"), {
              method: "GET",
              headers: new Headers({
                "Authorization": localStorage.getItem("token")
              })
            })
            .then(function(response) {
              if (response.status == 200) {
                return response.json();
              }
              // 200番以外のレスポンスはエラーを投げる
              return response.json().then(function(json) {
                throw new Error(json.message);
              });
            })
            .then(function(json) {
              // レスポンスが200番で返ってきたときの処理はここに記述する
              //console.log(json);
              vm.schedule = json;
              let monthSchedule = json.filter((e)=>{
                const year = e.datetime.substr(0,4);
                const month = e.datetime.split('/')[1];
                // console.log(year+month);
                return (vm.calData.year == year) && (vm.calData.month == month)
              });

              const calendarTable = document.querySelectorAll('#calendar td');
              //console.log(calendarTable);

              monthSchedule.forEach((val)=>{
                  const tempDate = (val.datetime.split('/')[2]).split(' ')[0];
                  calendarTable.forEach((e)=>{
                    // console.log(e.textContent +':' + tempDate);
                    if(tempDate == e.textContent) {
                      e.setAttribute('style', 'background-color:#F4D12D');
                    }
                  })
              });
            })

            // console.log(this.calendar);
            if (this.calData.month == 1) {
                this.calData.year--;
                this.plan.planyear--;
                this.calData.month = 12;
                this.plan.planmonth = 12;
            }
            else {
                this.calData.month--;
                this.plan.planmonth--;
            }
            setTimeout(this.changecolor,10);
          },

        moveNextMonth: function() {
          // APIにGETリクエストを送る
          fetch(url + "/nomeru-drinkingparty" +
              "?userId=" + localStorage.getItem("userId"), {
              method: "GET",
              headers: new Headers({
                "Authorization": localStorage.getItem("token")
              })
            })
            .then(function(response) {
              if (response.status == 200) {
                return response.json();
              }
              // 200番以外のレスポンスはエラーを投げる
              return response.json().then(function(json) {
                throw new Error(json.message);
              });
            })
            .then(function(json) {
              // レスポンスが200番で返ってきたときの処理はここに記述する
              //console.log(json);
              vm.schedule = json;
              let monthSchedule = json.filter((e)=>{
                const year = e.datetime.substr(0,4);
                const month = e.datetime.split('/')[1];
                // console.log(year+month);
                return (vm.calData.year == year) && (vm.calData.month == month)
              });

              const calendarTable = document.querySelectorAll('#calendar td');
              //console.log(calendarTable);

              monthSchedule.forEach((val)=>{
                  const tempDate = (val.datetime.split('/')[2]).split(' ')[0];
                  calendarTable.forEach((e)=>{
                    // console.log(e.textContent +':' + tempDate);
                    if(tempDate == e.textContent) {
                      e.setAttribute('style', 'background-color:#F4D12D');
                    }
                  })
              });
            })

            if (this.calData.month == 12) {
                this.calData.year++;
                this.plan.planyear++;
                this.calData.month = 1;
                this.plan.planmonth = 1;
            }
            else {
                this.calData.month++;
                this.plan.planmonth++;
            }
            setTimeout(this.changecolor,10);
          },

        changecolor: function() {
            // 背景色のクリア
            const calealltd = document.querySelectorAll('#calendar td');
            calealltd.forEach((col)=>{
                col.setAttribute('style', 'background-color:#FFFFFF');
              });
            // const cale1sttd = document.querySelectorAll('#calendar td:first-child');
            // cale1sttd.forEach((col)=>{
            //     col.setAttribute('style', 'background-color:#FEEEFF');
            //   });
            // const cale7thtd = document.querySelectorAll('#calendar td:nth-child(7)');
            // cale7thtd.forEach((col)=>{
            //     col.setAttribute('style', 'background-color:#DFFFFF');
            //   });

            let monthSchedule = this.schedule.filter((e)=>{
              const year = e.datetime.substr(0,4);
              const month = e.datetime.split('/')[1];
              // console.log(year+month);
              return (vm.calData.year == year) && (vm.calData.month == month)
            });

            const calendarTable = document.querySelectorAll('#calendar td');
            //console.log(calendarTable);

            monthSchedule.forEach((val)=>{
                const tempDate = (val.datetime.split('/')[2]).split(' ')[0];
                calendarTable.forEach((e)=>{
                  // console.log(e.textContent +':' + tempDate);
                  if(tempDate == e.textContent) {
                    e.setAttribute('style', 'background-color:#F4D12D');
                  }
                })
            });
          },
        dayget: function(day,e) {
          // console.log(e.target);//eがイベントオブジェクトで、イベントに関するいろんな情報持ってる。targetはクリックされた大賞
          this.plan.planday = JSON.stringify(day.day);
          time = window.prompt("予定を登録する場合は予定開始時間を入力してください\n予定をキャンセルする場合は'キャンセル'と入力してください\n例) 18:00→1800", "");
          if (time == null) {
            this.plan.datetime = "";
          } else if (time == "") {
            this.plan.datetime = this.plan.planyear + "/" + this.plan.planmonth + "/" + this.plan.planday;
            this.tmpe = e.target;
          } else if (time == "キャンセル") {
            fetch(url + "/nomeru-drinkingparty", {
              method: "DELETE",
              headers: new Headers({
                "Authorization": localStorage.getItem("token")
              }),
              body: JSON.stringify({
                "userId" : localStorage.getItem("userId"),
                "simpledatetime" : this.plan.planyear + "/" + this.plan.planmonth + "/" + this.plan.planday
              })
            })
            .then(function(response) {
              if (response.status == 200) {
                return response.json();
              }
              // 200番以外のレスポンスはエラーを投げる
              return response.json().then(function(json) {
                throw new Error(json.message);
              });
            })
            .then(function(json) {
              // レスポンスが200番で返ってきたときの処理はここに記述する
            })
            .catch(function(err) {
              // レスポンスがエラーで返ってきたときの処理はここに記述する
            });

            location.href = "./nomeru-Dayregist.html"

          }else {
            var hourtmp = time.substring(0,2);
            var minutetmp = time.substring(2,4);
            time = hourtmp + ":" + minutetmp;
            this.plan.datetime = this.plan.planyear + "/" + this.plan.planmonth + "/" + this.plan.planday + "   " + time + " ~";
            var hour_index = time.indexOf(":");
            this.plan.planhour = time.substring(0,hour_index);
            this.plan.planminute = time.substring(hour_index+1,time.length);
            this.tmpe = e.target;
          }
        }
    },
    computed: {
        calendar: function () {
            // 1日の曜日
            var firstDay = new Date(this.calData.year, this.calData.month - 1, 1).getDay();
            // 晦日の日にち
            var lastDate = new Date(this.calData.year, this.calData.month, 0).getDate();
            // 日にちのカウント
            var dayIdx = 1;

            var calendar = [];
            for (var w = 0; w < 6; w++) {
                var week = [];

                // 空白行をなくすため
                if (lastDate < dayIdx) {break;}

                for (var d = 0; d < 7; d++) {
                    if (w == 0 && d < firstDay) {
                        week[d] = {day: ''};
                    } else if (w == 6 && lastDate < day) {
                        week[d] = {day: ''};
                        dayIdx++;
                    } else if (lastDate < dayIdx) {
                        week[d] = {day: ''};
                        dayIdx++;
                    } else {
                        week[d] = {day: dayIdx};
                        dayIdx++;
                    }
                }

                calendar.push(week);
            }
            return calendar;
        }
    }
});

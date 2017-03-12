var day = document.getElementById("day");
var today = document.getElementById("today");
var week = document.getElementById("week");
// 获取倒计时时间，距离2017-10-14的天数
var timeNow = new Date();
var secondTime = timeNow.getTime();
var time = "2017-10-14 00:00:00"; 
var times = Date.parse(new Date(time.replace(/-/g, "/")));
var days = Math.floor((times-secondTime)/(24*60*60*1000));
// 获取星期几
var dayNumber = timeNow.getDay();
var weekArray = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
// 获取现在日期
var year = timeNow.getFullYear();
var month = timeNow.getMonth() + 1;
var dayNow = timeNow.getDate();
var dateTime =  year + "年" + month + "月" + dayNow + "日" ;
// 将获取到的倒计时插入day的html节点
day.innerHTML = days;
// 将获取到的星期几插入week的html节点
week.innerHTML = weekArray[dayNumber];
// 将获取到的现在日期插入today的html节点
today.innerHTML = dateTime;

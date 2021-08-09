export default function getToday (){

    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      var now = new Date();

      var day = days[now.getDay()];

      return day;
}
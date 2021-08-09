export default function formatDate(date) {
    var now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();

    if(h < 10)
    {
        h = "0" + h;
    }
    
    if(m < 10)
    {
        m = "0" + m;
    }

    let formattedDate = (h >= 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');;

    return formattedDate;
  };
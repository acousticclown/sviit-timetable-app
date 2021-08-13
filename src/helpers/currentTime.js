export default function formatDate(date) {
    let [h, m] = date.split(":");

    let time = (parseInt(h) * 60) + parseInt(m);

    let med;

    if(h < 12)
    {
        if(h < 10)
        {
            h = "0" + h; 
        }
        med = " AM";
    }
    else{
        if(h == 12){
            h = "12";
        }
        else{
            h = h - 12;
        }
        if(h < 10)
        {
            h = "0" + h; 
        }
        med = " PM";
    }

    let formattedDate = h + ":" + m + med;

    return [formattedDate, time];
  };

export function formatNow(){
    var now = new Date();

    let h = now.getHours().toString();
    let m = now.getMinutes().toString();

    let time = (parseInt(h) * 60) + parseInt(m);

    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }

    return [time];
}
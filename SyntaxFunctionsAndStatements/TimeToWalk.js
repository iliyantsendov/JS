function solve(steps, footprintLength, speedInKmForHour){
  let distanceInMeters = steps * footprintLength;

  let speedForMEtersInSecond = speedInKmForHour / 3.6;

  let timeSecond = Math.round(distanceInMeters / speedForMEtersInSecond);

  let rest = Math.floor(distanceInMeters / 500);
  timeSecond+= rest * 60;


  let seconds = timeSecond  % 60;
  let minutes = (timeSecond - seconds) / 60;
  let hour = Math.floor((timeSecond - seconds) / 3600);

 formattheOutput(hour, minutes, seconds);

 function formattheOutput(hour, minutes, seconds){
     if(hour < 10){
         hour = '0'+hour;
     }
     if(minutes < 10){
         minutes = '0'+minutes;
     }
     if(seconds < 10){
         seconds = '0'+seconds;
     }

     console.log(`${hour}:${minutes}:${seconds}`);
 }
}

solve(2564, 0.70, 5.5);


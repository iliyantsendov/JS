function solve(array){
    let currentAreaLimit = +0;
    switch(array[1]){
        case 'motorway': currentAreaLimit = 130;break;       
        case 'interstate': currentAreaLimit = 90;break;
        case 'city': currentAreaLimit = 50;break;
        case 'residential': currentAreaLimit = 20;break;
        default: console.log('Invalid Area');break;
    }

   if(currentAreaLimit >= +array[0]){
       console.log();
   }
   else if((currentAreaLimit + 20) >= +array[0]){
       console.log('speeding');
   }
   else if((currentAreaLimit + 40) >= +array[0]){
       console.log('excessive speeding ');
   }
   else{
       console.log('reckless driving');
   }
}



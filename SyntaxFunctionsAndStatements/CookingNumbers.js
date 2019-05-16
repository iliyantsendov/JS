function solve(array){
    let number = +array[0];
    for(let i = 1;i < array.length;i++){     
        switch(array[i]){
            case 'chop': number /= 2;break;
            case 'dice': number = (Math.sqrt(number));break;
            case 'spice':  number += 1;break;
            case 'bake': number *= 3;break;
            case 'fillet': number = number - (number * 0.2);break;
            default: console.log('Invalid operation');break;
        }
        console.log(number);
    }
}

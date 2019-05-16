function solve(firstNumber, secondNumber){

let oldDivisor = Number(1);
let newDivisor = Number(1);
let smaller = Math.min(+firstNumber,+secondNumber);

for(let i = oldDivisor; i <=smaller;i++){
if(+firstNumber % i === 0 && +secondNumber % i ===0){
    newDivisor = i;
}
if(+newDivisor > +oldDivisor){
    oldDivisor = newDivisor;
}
}
console.log(oldDivisor);

}


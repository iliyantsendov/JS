function solve(number){

    let text = number.toString();

    let allGood = true;
    for(let i = 0;i < text.length - 1;i++){
        if (Number(text[0]) === Number(text[i + 1])){
           continue;
        }
        allGood = false;
        break;
    }

    if (allGood == true){
        console.log(`true`);
    }
    else
    {
        console.log(`false`);
    }
    let totalSum = 0;

    for(let i = 0;i < text.length;i++){
        totalSum += Number(text[i]);
    }
    console.log(Number(totalSum));
}

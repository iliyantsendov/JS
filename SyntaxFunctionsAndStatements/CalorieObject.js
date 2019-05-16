function solve(array){
    let assocArray = [];
    let newElement = {};
    for(let i = 0;i < array.length;i+=2){
        newElement[array[i]] = Number(array[i + 1]);
        assocArray.push(newElement);
        
    }

    return console.log(assocArray[0]);

}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
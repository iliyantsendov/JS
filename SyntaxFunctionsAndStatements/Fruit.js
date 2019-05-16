function solve(name, weight, ppk){

    let converted = Number(weight) / 1000;
    let totalMoney = converted * ppk;
    console.log(`I need \$${totalMoney.toFixed(2)} to buy ${converted.toFixed(2)} kilograms ${name}.`);
}
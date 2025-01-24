/*/ Take a variable with distance in **kilometres** as input and output the same distance *converted* to **miles**

let kilometers = 15

let miles = kilometers/1.609

console.log(`${kilometers} kilometers is ${miles} miles`);
/*/


function meterstoyards (metersinput){
    let yards = metersinput * 1.09361;
    return yards;
}

console.log(meterstoyards(6));
console.log(meterstoyards(2));
console.log(meterstoyards(8));
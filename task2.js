/*/ Take a variable with a **numericgrade** and output the corresponding **lettergrade**

let numericgrade = 60

let lettergrade = "f" 

if (numericgrade >=90){
    lettergrade="A+"
} else if (numericgrade >=80){
    lettergrade= "A"
}else if (numericgrade >=70){
    lettergrade= "B"
}else if (numericgrade >=60){
    lettergrade= "c"
}else if (numericgrade >=50){
    lettergrade= "D"
}
console.log(`${numericgrade} numericgrade is ${lettergrade} lettergrade`)
/*/


function clothing (temp, relHumidity){
    if (temp > 30 && relHumidity == 100){
        return("Rain Jacket");
    }
   if (temp < 5 && relHumidity < 20){
        return("Winter Coat");
    }
  
}

console.log(clothing(33, 100));
console.log(clothing(2, 15));

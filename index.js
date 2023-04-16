//import module dg cara casual
// const {coffeeStock, isCoffeeMachineReady} = require('./state');

//import dengan es6
import {coffeeStock, isCoffeeMachineReady as icmr} from "./state.js";

// const makeCoffee = (type, miligrams) =>{

//     if(coffeeStock[type] >= miligrams){
//         console.log("Kopi berhasil dibuat!");
//     }

//     else{
//         console.log("Biji kopi habis!");
//     }
// };

// makeCoffee("robusta", 80);

const displayStock = (coffeeStock) => {
    for (const type in coffeeStock){
        console.log(type);
    }
};

displayStock(coffeeStock);
console.log(icmr);

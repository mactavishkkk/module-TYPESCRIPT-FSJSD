//Literals

let literal: 'Hello world';
let pi: 3.14;
/*
Quando passamos como tipo da variável o seu próprio valor, ela literalmente 
será o valor, impossibilitando uma atribuição.
*/

pi = 3;

const delta = "b^2-4ac"; //Quando declaramos 'consts' elas sempre nos retornam variáveis literais

//Union

let optionLiteral: "Yes" | "No" | "Maybe";
optionLiteral = "Yes";//O pipe representa a condicao 'or(ou)' onde nossa variável recebera yes, ou no ou maybe

//Podemos fazer isto da forma naoliteral
let option: number | boolean;
option = 2;
option = false;
option = 'Hi';//Como ela só pode receber um numero ou um booleano, então não pode receber uma string

//Exemplo real

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let planet: Planet;

// Com isso o autocompletar da IDE se torna ainda mais poderoso
let homePlanet: Planet;

function checkPlanet(planet: Planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra");
    }
}

type GreetingCallBack = (name: string) => void; //'void' significa que a função não possui um retorno propriamente especificado.

function greet(callback: GreetingCallBack){
    let name: any;
    callback(name);
}
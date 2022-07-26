const setName = async (name, shinigame) => {
    shinigame.name = name;
};
const setDivison = async (divison, shinigame) => {
    shinigame.division = divison;
};
const setBankai = async (bankai, shinigame) => {
    shinigame.bankai = bankai;
};
const shinigame = {
    name: '',
    division: 0,
    bankai: false
};
setName('Ikkaku', shinigame);
setDivison(11, shinigame);
setBankai(false, shinigame);
console.log(shinigame);
//O typescript na marioria dos casos é uma linguagem de PRODUCAO, ou seja, quando formos para execução/implementação, teremos de transpilá-lo para o Javascript.
/*
Inferência, quando declaramos o bojeto abaixo desta forma, automaticamente nossa IDE(vscode) já entendeu que o campo 'name' está e sempre receberá uma string
e o nosso campo 'speed', está e sempre receberá um number
*/
const spaceship = {
    name: 'King',
    speed: 0,
    crews: {
        name: 'eduardo',
        age: 18
    }
    //Se convertemos para JS, nossa IDE ainda saberá os tipos destas propriedades
};
function accelerate(spaceship, speed) {
    spaceship.speed = speed;
    //Mas aqui, ele não conseguirá tipar elas.
}
accelerate(spaceship, 50);

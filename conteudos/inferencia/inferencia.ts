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
}


function accelerate(spaceship: { name: string; speed: number; }, speed: number) {
    spaceship.speed = speed;
    //Mas aqui, ele não conseguirá tipar elas.
}

accelerate(spaceship, 50);
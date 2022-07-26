//POO [JS VS TS]
/*
Encapsulamento, nos temos 3 níveis de encapsulamento
Públic, pode ser acessado de qualquer lugar do código, como o método 'accelerate'
Protected, que só pode ser acessado dentro de sua própria classe ou de suas subclasses, como 'Spaceship' e 'Fighter'
Private, onde só pode ser acessado em sua própria classe.
*/

/*
class Spaceship {
    private _name: string
    protected captain: string
    protected speed: number

    //Com o get e set podemos forçar'' a alteração de valores privados de qualquer lugar do código
    get name(){
        return this._name
    }

    set name(name){
        this._name = name
    }

    constructor(name: string, captain: string) {
        this.name = name
        this.captain = captain
        this.speed = 0
    }

    public accelerate(rate: number, time: number) {
        this.speed = rate * time
    }
}

class Fighter extends Spaceship {
    weapons: number

    constructor(name: string, captain: string, weapons: number) {
        super(name, captain)
        this.weapons = weapons
    }

    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log('Pew!')
        }
    }

    erase() {
        this.captain = ''
    }
}

let ship = new Fighter('USS Enterprise', 'James T. Kirk', 29)

ship.accelerate(50, 10);
ship.weapons = 10;

ship.name = 'Neil';
*/
/*
Os generics, são uma forma de permitir que passemos argumentos de uma função, cujo esses argumentos são tipos.
Isso é importante caso o tipo seja mais relevante que o valor que a função receberá
*/

function first(array) {
    return array[0]
}

function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
    return array[array.length - 1]
}

const pilots = ['Luke', 'Biggs', 'Neil', 'Wedge', 'Han', 'Airton'];

const firstPilot = first(pilots);
const lastPilot = last(pilots);

//---

interface Ship {
    name: string
    pilot: string
}

interface Fighter extends Ship {
    weapons: number
    shields: number
}

interface Transport extends Ship {
    capacity: number
}

interface Speeder extends Ship {
    speed: number
    acceleration: number
}

/*
Aqui alem de dizermos que ele pode ser qualquer coisa com 'shipType', também estamos dizendo que ele precisa,
no mínimo, de um nome que é uma string, e um pilot que também é uma string ou podemos só apontar para uma interface que diga isso
*/
function cloneShip<shipType extends Ship>(ship: shipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
}

const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
}

const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
}

// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
const copy1 = cloneShip(falcon, 'Milano', 'Peter')
const copy2 = cloneShip(xWing, 'Black One', 'Poe')

//REACT

//const [pilots, setPilots] = useState<Pilot[]>([])

interface EnemyShip {
    name: string
    pilot: string
    flag?: string // A propriedade é opcional para evitar erros
}

// O tipo Ship não estaria correto aqui
const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy')
// Mas podemos explicitamente passar o tipo para a função
// e agora temos o tipo EnemyShip atribuido corretamente
const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')

// Aqui temos um erro por conta do tipo Ship
enemyCopy.flag = 'Imperial'
// Já aqui temos a propriedade opcional flag
enemyCopy2.flag = 'Imperial'
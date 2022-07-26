/*
    As interfaces são como 'contratos, onde nos estamos 'assinando' um termo que garante que o que está ali dentro 
    será futuramente implementado, da forma que está descrito ali.
*/

interface CelestialBody {//Contrato 1
    name: string,
    mass: number
}

interface Star extends CelestialBody { //Contrato 2
    age: number,
    planets: Planet[]
}

interface Planet extends CelestialBody { //Contrato 3
    population: number,
    createSatellite: (name: string) => void;
}

let sun: Star;

sun.name = "Sol";
sun.mass = 1.989 * (10 ** 30);
sun.age = 4.603 * (10 ** 9);
sun.planets = [];

class MilkywayPlanet implements Planet { // Implementação das regras do contrato
    name: string
    mass: number
    population: number

    constructor(name: string, mass: number, population: number) {
        this.name = name,
            this.mass = mass,
            this.population = population
    }
    createSatellite(name: string) {

    }
}
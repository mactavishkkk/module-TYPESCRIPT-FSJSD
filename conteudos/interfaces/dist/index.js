/*
    As interfaces são como 'contratos, onde nos estamos 'assinando' um termo que garante que o que está ali dentro
    será futuramente implementado, da forma que está descrito ali.
*/
let sun;
sun.name = "Sol";
sun.mass = 1.989 * (10 ** 30);
sun.age = 4.603 * (10 ** 9);
sun.planets = [];
class MilkywayPlanet {
    name;
    mass;
    population;
    constructor(name, mass, population) {
        this.name = name,
            this.mass = mass,
            this.population = population;
    }
    createSatellite(name) {
    }
}

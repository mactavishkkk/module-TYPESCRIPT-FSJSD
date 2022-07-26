var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log('---');
            console.log(`Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log('---');
            console.log(`O método ${key} retornou os valores: ${JSON.stringify(result)}`);
            return result;
        };
    };
}
class PlanetLog {
    name;
    constructor(name) {
        this.name = name;
    }
    //Um erro ocorre pois precisamos dizer ao tsc que trabalharemos com decorators em seu 'tsconfig.json' com 
    //Decorators literalmente a complam a um método por exemplo, onde eles estiver mais próximo, esse ele irá operar
    sum(value) {
        return value + 3;
    }
    invertName() {
        return this.name.split('').reverse().join('');
    }
}
__decorate([
    log()
], PlanetLog.prototype, "sum", null);
__decorate([
    log()
], PlanetLog.prototype, "invertName", null);
const planetLogA = new PlanetLog('Terra');
const resultLogA = planetLogA.sum(5);
console.log(`Resultado ${resultLogA}`);
planetLogA.invertName();

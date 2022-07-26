/*
Como o nome sugere, podemos 'decorar' nosso parâmetro, argumento, método, classe, ou seja lá o que o decorator estrá decorando,
podemos decorá-lo acrescentando novas coisas como features por exemplo
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorator
function Decorator() {
    return function (target, key, descriptor) {
        descriptor.value = function (value) {
            console.log(`Calculando ${value} elevado ao quadrado`);
            return value ** 2;
        };
    };
}
class Planet {
    name;
    constructor(name) {
        this.name = name;
    }
    //Um erro ocorre pois precisamos dizer ao tsc que trabalharemos com decorators em seu 'tsconfig.json' com 
    //Decorators literalmente a complam a um método por exemplo, onde eles estiver mais próximo, esse ele irá operar
    sum(value) {
        return value + 2;
    }
    sub(value) {
        return value - 2;
    }
}
__decorate([
    Decorator()
], Planet.prototype, "sub", null);
const planetA = new Planet('Terra');
const resultA = planetA.sum(5);
console.log(`Resultado ${resultA}`);
const planetB = new Planet('Terra');
const resultB = planetB.sub(5);
console.log(`Resultado ${resultB}`);

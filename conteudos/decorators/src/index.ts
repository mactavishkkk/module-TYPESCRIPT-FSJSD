/*
Como o nome sugere, podemos 'decorar' nosso parâmetro, argumento, método, classe, ou seja lá o que o decorator estrá decorando,
podemos decorá-lo acrescentando novas coisas como features por exemplo
*/

//Decorator
function Decorator() {
    return function (target, key, descriptor) {
        descriptor.value = function (value: number) {
            console.log(`Calculando ${value} elevado ao quadrado`);
            return value ** 2;
        }
    }
}

class Planet {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    //Um erro ocorre pois precisamos dizer ao tsc que trabalharemos com decorators em seu 'tsconfig.json' com 
    //Decorators literalmente a complam a um método por exemplo, onde eles estiver mais próximo, esse ele irá operar

    
    sum(value: number) {
        return value + 2
    }

    @Decorator()
    sub(value: number) {
        return value - 2
    }
}

const planetA = new Planet('Terra');
const resultA = planetA.sum(5);

console.log(`Resultado ${resultA}`)

const planetB = new Planet('Terra');
const resultB = planetB.sub(5);

console.log(`Resultado ${resultB}`)
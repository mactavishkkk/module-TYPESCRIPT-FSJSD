function log() {
    return function (target, key, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log('---');
        console.log(`Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`)

        const result = originalMethod.apply(this, args);

        console.log('---');
        console.log(`O método ${key} retornou os valores: ${JSON.stringify(result)}`)


        return result;
    }

    }
}

class PlanetLog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    //Um erro ocorre pois precisamos dizer ao tsc que trabalharemos com decorators em seu 'tsconfig.json' com 
    //Decorators literalmente a complam a um método por exemplo, onde eles estiver mais próximo, esse ele irá operar

    @log()
    sum(value: number) {
        return value + 3
    }

    @log()
    invertName(){
        return this.name.split('').reverse().join('');
    }
}

const planetLogA = new PlanetLog('Terra');
const resultLogA = planetLogA.sum(5);

console.log(`Resultado ${resultLogA}`)

planetLogA.invertName();
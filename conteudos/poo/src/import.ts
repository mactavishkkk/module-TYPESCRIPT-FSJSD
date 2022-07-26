import { Spaceship } from './export'
import * as lodash from "lodash"
/* 
Uma biblioteca que nos traz muitos métodos que nos ajudará no desenvolvimento
Instalada com o reposítorio '@types' onde a comunidade tipou a biblioteca, podemos usar em nossos projetos tsc
*/

interface BattleSpaceship extends Spaceship {
    weapons: number
}

let apollo: BattleSpaceship = {
    name: 'Apollo',
    pilot: "Neil Arms",
    speed: 0,
    weapons: 2
}

console.log(lodash.camelCase(apollo.pilot));

// { pilot: "neilArms" }


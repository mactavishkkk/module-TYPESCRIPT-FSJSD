//Tuplas é exatamente o que temos abaixo, alem de falarmos quais os tipos dos elementos, nos limitamos o número deles.
let pointCartesian: [number, number, /*string, podemos passar valores diferentes também*/];

pointCartesian = [2, 5, /*3 passando um terceiro valor causaria um erro em nossa variavel */];
/* 
Muito usado no react, mais cespecificamente com os hooks
const [name, setName] = useState = '';
*/

let spaceship: [string, number, boolean];

spaceship = ['Apollo', 11, false];
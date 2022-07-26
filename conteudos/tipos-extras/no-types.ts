function sendSpaceship(spaceship: { pilot: string, coPilot?: string }) {
    //...
    /*
    A forma natural como declaramos os parâmetros diz que estes são obrigatórios em sua chamada,
    podemos torná-los opcionais com o operar '?' antes dos ':' vvv
    */
}

sendSpaceship({ pilot: 'Han Solo', coPilot: 'Chewbacca' })
sendSpaceship({ pilot: 'Luke Skywalker' }) // Então podemos chamar a função assim.

let input: any;

input = 'teste';
input = 20;
input = true;

let text: string;

text = input;

function verify(teste) {
    if (teste) {

    } else {
        let check: never
        //O never, é uma espécie de 'cadeado' onde a variável será trancada e não poderá receber nenhum tipo de valor
        check = 20;
        check = true;
        check = 'text';
        return check
    }
}
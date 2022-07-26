function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " saiu em uma miss\u00E3o."));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade de ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade de ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade de ".concat(spaceship.name));
    }
}
var spaceshipName = prompt('Insira o nome da nave a ser enviada');
var spaceshipCaptain = prompt('Insira o nome do(a) capitão(ã) da nave');
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt('Insira a velocidade para qual deseja acelerar'));
var currentSpeed = accelerate(speed, currentShip);

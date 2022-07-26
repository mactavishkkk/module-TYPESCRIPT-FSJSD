function sendSpaceship(name: string, captain: string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} saiu em uma missão.`)
    return spaceship
}

function accelerate(targetSpeed: number, spaceship: { name: string, speed: number }) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade de ${spaceship.name} para ${targetSpeed}`)
    } else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade de ${spaceship.name} para ${targetSpeed}`)
    } else {
        alert(`Mantendo a velocidade de ${spaceship.name}`)
    }
}

const spaceshipName = prompt('Insira o nome da nave a ser enviada');
const spaceshipCaptain = prompt('Insira o nome do(a) capitão(ã) da nave');

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);

const speed = Number(prompt('Insira a velocidade para qual deseja acelerar'));
const currentSpeed = accelerate(speed, currentShip)
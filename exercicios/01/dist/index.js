const spaceshipsArrays = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crews: [],
        inMission: false
    };
    spaceshipsArrays.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceshipsArrays.find(ship => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crews.length + 1 >= spaceship.crewLimit) {
        alert(`Sua nave está lotada, por isso o membro ${member} não pode ser adicionado(a).`);
    }
    else {
        spaceship.crews.push(member);
        alert(`O membro ${member} foi adicionado a ${spaceship.name}.`);
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} não pode ser enviada. nave já partiu em missão`);
    }
    else if (spaceship.crews.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviada. número de tripulantes insuficiente`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} partiu em uma missão`);
    }
}
function showMenu() {
    let newOpcaoMenu;
    do {
        newOpcaoMenu = prompt("Bem-vindo ao menu de controle: \n 1 - Inserir uma nova espaço-nave \n 2 - Adicionar um tripulante \n 3 - Lançar uma espaço-nave \n 4 - Mostrar espaço-naves \n 5 - Sair");
        switch (newOpcaoMenu) {
            case "1":
                const spaceshipName = prompt('Qual o nome da nave?');
                const spaceshipPilot = prompt('Qual o nome do piloto?');
                const spaceshipCrewLimit = Number(prompt('Qual o tamanho máximo de tripulantes?'));
                addSpaceship(spaceshipName, spaceshipPilot, spaceshipCrewLimit);
                break;
            case "2":
                const member = prompt('Qual o nome do tripulante que deseja adicionar?');
                const spaceshipFind = prompt(`Para qual nave espacial ${member} deverá ser adicionado?`);
                const spaceship = findSpaceship(spaceshipFind);
                if (spaceship) {
                    const confirmation = confirm(`Confirme a inclusão de ${member} na tripulação de ${spaceship.name}!`);
                    if (confirmation) {
                        addCrewMember(member, spaceship);
                    }
                }
                break;
            case "3":
                const spaceshipNameLaunch = prompt(`Qual nave espacial deverá ser lançada?`);
                const spaceshipLaunch = findSpaceship(spaceshipNameLaunch);
                if (spaceshipLaunch) {
                    const confirmation = confirm(`Confirme o lançamento da ${spaceshipLaunch.name}!`);
                    if (confirmation) {
                        sendInMission(spaceshipLaunch);
                    }
                }
                break;
            case "4":
                let list = 'Naves registradas \n';
                spaceshipsArrays.forEach((spaceship) => {
                    list +=
                        `Nave: ${spaceship.name}
                    Piloto: ${spaceship.pilot}
                    Status da missão: Esta espaço-nave ${spaceship.inMission ? "Sim" : "Não"} está em missão;
                    Tamanho máximo de tripulantes: ${spaceship.crewLimit}
                    Tripulantes a bordo: ${spaceship.crews.length}`;
                    spaceship.crews.forEach(member => {
                        list += ` ${member}\n`;
                    });
                });
                alert(list);
                break;
            case "5":
                let status = confirm("Deseja mesmo sair?");
                if (status == true) {
                    alert("Adeus!");
                }
                break;
        }
    } while (newOpcaoMenu != "5");
}
showMenu();

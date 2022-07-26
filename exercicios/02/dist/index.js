//---
let planetsArray = [];
function findPlanet(name) {
    let planet;
    planet = planetsArray.find(planet => planet.name === name);
    return planet;
}
// ---
function savePlanet(name, coordinates, situation) {
    const planet = {
        name,
        coordinates,
        situation,
        satellites: []
    };
    planetsArray.push(planet);
    alert(`Planeta ${planet.name} registrado com sucesso`);
}
function updateSituation(newSituation, planet) {
    planet.situation = newSituation;
    alert(`Situação alterada com sucesso`);
}
function addSatellites(newSatellite, planet) {
    planet.satellites.push(newSatellite);
    alert(`Satélite adicionado com sucesso`);
}
function remSatellites(satellite, planet) {
    let currentSatellite = planet.satellites.indexOf(satellite);
    planet.satellites.splice(currentSatellite, 1);
    alert(`Satélite removido com sucesso`);
}
function showMenu() {
    let newOpcaoMenu;
    do {
        newOpcaoMenu = prompt("Bem-vindo ao menu de controle: \n 1 - Inserir um novo planeta \n 2 - Atualizar a situação de um planeta \n 3 - Adicionar um satélite a um planeta \n 4 - Remover um satelite de um planeta \n 5 - Listar os planetas \n 6 - Sair");
        switch (newOpcaoMenu) {
            case "1":
                let planetName = prompt('Digite o nome do planeta');
                let planetCoordinatesOne = Number(prompt('Digite a primeira coordenada do planeta'));
                let planetCoordinatesTwo = Number(prompt('Digite a segunda coordenada do planeta'));
                let planetCoordinatesThree = Number(prompt('Digite a terceira coordenada do planeta'));
                let planetCoordinatesFour = Number(prompt('Digite a quarta coordenada do planeta'));
                let planetSituation = prompt('Digite a situação do planeta [habitavel | inabitavel | inexplorado | habitado]');
                savePlanet(planetName, [planetCoordinatesOne, planetCoordinatesTwo, planetCoordinatesThree, planetCoordinatesFour], planetSituation);
                break;
            case "2":
                const planetFindSit = prompt(`Para qual planeta deseja atualizar sua situação?`);
                const newSituationSit = prompt(`Qual sua nova situação?`);
                const planetSit = findPlanet(planetFindSit);
                updateSituation(newSituationSit, planetSit);
                break;
            case "3":
                const planetFindSat = prompt(`Para qual planeta deseja adicionar um satélite?`);
                const newSatellite = prompt(`Qual o nome do satélite?`);
                const planetSat = findPlanet(planetFindSat);
                addSatellites(newSatellite, planetSat);
                break;
            case "4":
                const planetFindSatRem = prompt(`Para qual planeta deseja adicionar um satélite?`);
                const newSatelliteRem = prompt(`Qual o nome do satélite?`);
                const planetSatRem = findPlanet(planetFindSatRem);
                remSatellites(newSatelliteRem, planetSatRem);
                break;
            case "5":
                let list = 'Planetas registrados: \n';
                planetsArray.forEach((planet) => {
                    const [a, b, c, d] = planet.coordinates;
                    list +=
                        `Planeta: ${planet.name}
                    Coordenadas: [${a}, ${b}, ${c}, ${d}]
                    Situação atual do planeta: ${planet.situation}
                    Satélites: ${planet.satellites.length}\n`;
                    planet.satellites.forEach(satellite => {
                        list += `${satellite}, `;
                    });
                });
                alert(list);
                break;
            case "6":
                let status = confirm("Deseja mesmo sair?");
                if (status == true) {
                    alert("Adeus!");
                }
                break;
        }
    } while (newOpcaoMenu != "6");
}
showMenu();

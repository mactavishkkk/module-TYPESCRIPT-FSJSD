const setName = async (name: string, shinigame: { name?: string; division?: number; bankai?: boolean }) => {
    shinigame.name = name;
}

const setDivison = async (divison: number, shinigame: { name?: string; division?: number; bankai?: boolean }) => {
    shinigame.division = divison;
}

const setBankai = async (bankai: boolean, shinigame: { name?: string; division?: number; bankai?: boolean }) => {
    shinigame.bankai = bankai;
}

const shinigame = {
    name: '',
    division: 0,
    bankai: false
}

setName('Ikkaku', shinigame);
setDivison(11, shinigame);
setBankai(false, shinigame);

console.log(shinigame);

//O typescript na marioria dos casos é uma linguagem de PRODUCAO, ou seja, quando formos para execução/implementação, teremos de transpilá-lo para o Javascript.
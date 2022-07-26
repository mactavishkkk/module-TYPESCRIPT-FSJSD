// ---
class userGitHub {
    id;
    login;
    name;
    bio;
    public_repos;
    repos_url;
    constructor(id, login, name, bio, public_repos, repos_url) {
        this.id = id,
            this.login = login,
            this.name = name,
            this.bio = bio,
            this.public_repos = public_repos,
            this.respos_url = repos_url;
    }
}
class repoGitHub {
    name;
    description;
    fork;
    stargazers_count;
    constructor(name, description, fork, stargazers_count) {
        this.name = name,
            this.description = description,
            this.fork = fork,
            this.stargazers_count = stargazers_count;
    }
}
// ---
const users = [];
async function getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    if (user.message) {
        console.log('Usuário não foi encontrado.');
    }
    else {
        users.push(user);
        console.log(`O usuário ${user.login} foi salvo.\n` +
            `\nid: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`);
    }
}
async function getRepo(username) {
    const user = users.find(user => [user.login === username]);
    if (typeof user === 'undefined') {
        console.log('Usuário não encontrado');
    }
    else {
        const response = await fetch(user.repos_url);
        const repos = await response.json();
        let message = `id: ${user.id}\n` +
            `\nNome: ${user.name}` +
            `\nRepositórios públicos: ${user.public_repos}` +
            `\n --- \n`;
        repos.forEach(repo => {
            message += `\nNome: ${repo.name}` +
                `\nDescrição: ${repo.description}` +
                `\nEstrelas: ${repo.stargazers_count}` +
                `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`;
        });
        console.log(message);
    }
}
function printUsers() {
    let message = `Usuários \n`;
    users.forEach(user => {
        message += `\n ${user.login}`;
    });
    console.log(message);
}
function calcRepos() {
    const reposTotal = users.reduce((accumulator, user) => accumulator + user.public_repos, 0);
    console.log(`O grupo possui um total de ${reposTotal} repositórios publicos.`);
}
function topFiveUsers() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 4);
    let message = 'Top 5 usuário com mais repositórios: \n';
    topFive.forEach((user, index) => {
        message += `\n ${index + 1} - ${user.login} - ${user.public_repos} repositórios`;
    });
    console.log(message);
}
// ---
async function main() {
    await getUser('mactavishkkk');
    await getUser('mario');
    await getUser('paulo');
    await getUser('ana');
    await getUser('pedro');
    printUsers();
    calcRepos();
    topFiveUsers();
}

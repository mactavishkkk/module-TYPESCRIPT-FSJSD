//São basicamente para guardarmos 'listas' de valoros, como o nome sugere, '(enum)era-los

enum Planets {
    mercurio = 1,
    venus, // 2
    terra, // 3
    marte, //E assim por diante
    netuno = 'netuno' //Podemo atribuir valores que não são números por exemplo
}

Planets.terra

enum users{
    admin, // Todo administrador será referenciado como 0
    user // Todo usuário será referenciado como 1
}

users.admin
function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }

    return admins;
}

const usuarios = new map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'Usuer');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuaios));
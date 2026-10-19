// Task 2: listUsers()
/*import { getServerURL } from './task1.js'; // importamos la funcion de task1 

export async function listUsers() { // declarar y exportar la funcion, export para que otro archivo utilice la funcion, async trabaja con operaciones asincronas
    const url = await fetch(`${getServerURL()}/users`);// aqui consultamos el servidor, fetch() hace una peticion http, getServerURL() devuelve la url del servidor
    // y agregamos /users para obtener la lista de usuarios, await espera a que llegue la respuesta antes de continuar
    const users = await url.json(); // aqui se convierte la respuesta a JSON, esta linea lee el contenido de la respuesta y lo convierte en datos que
    // JS pueda usar, await espera a que se complete la conversion antes de continuar
    console.log(users); // mostrar la lista en la consola
}
aqui vamos a utilizar esa URL para pedirle al servidor la lista de usuarios
usamos fetch() para realizar una peticion http get
los datos los sacamos del primer archivo server-individual de db.json, es donde esta la info de los usuarios, de la 
propiedad users
*/

import { getServerURL } from './task1.js';

export async function listUsers() {
    const url = await fetch(`${getServerURL()}/users`);
    const users = await url.json();

    console.log('[');

    users.forEach((user, index) => {
        console.log('{');
        console.log(`  id: ${user.id},`);
        console.log(`  first_name: '${user.first_name}',`);
        console.log(`  last_name: '${user.last_name}',`);
        console.log(`  email: '${user.email}'`);
        console.log(index === users.length - 1 ? '}' : '},');
    });

    console.log(']');
}


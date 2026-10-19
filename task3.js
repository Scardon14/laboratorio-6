// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from './task1.js';

export async function addUser(first_name, last_name, email) {
    //aqui vamos a obtener los usuarios actuales, para eso vamos a llamar a la funcion listUsers() que esta en task2.js
    const url = await fetch(`${getServerURL()}/users`);
    const users = await url.json();

    const maxId = users.reduce((max, user) => {
        return Math.max(max, Number(user.id));
    }, 0);

    const newUser = {
        id: maxId + 1,
        first_name: first_name,
        last_name: last_name,
        email: email
    };

    const enviarUsuario = await fetch(`${getServerURL()}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newUser)
    });

    //mostrar el usuario creado
    const usuarioCreado = await enviarUsuario.json();
    console.log(usuarioCreado);
}
/*
La operación que utilizaremos es POST, porque queremos crear un recurso nuevo en la API.
*/
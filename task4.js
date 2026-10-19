// Task 4: delUser(number)

export async function delUser(id){
    const url = await fetch(`${getServerURL()}/users/${id}`);
    const user = await url.json();
    
    if (user.id) {
        const eliminarUsuario = await fetch(`${getServerURL()}/users/${id}`, {
            method: 'DELETE'
        });
    }
}

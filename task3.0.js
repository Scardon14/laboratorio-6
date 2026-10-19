// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from './task1.js';
import { listUsers } from './task2.js';

export async function addUsers(first_name, last_name, email) {
   
    const users = await listUsers();
    console.log(users);
}
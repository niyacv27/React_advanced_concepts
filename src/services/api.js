import axios from 'axios';


export const fetchUsers = async () => {
const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
return data;
};


export const addUser = async (user) => {
const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', user);
return data;
};
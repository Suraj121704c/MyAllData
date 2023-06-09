interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}
// retrieving
const user: User = {
    type: 'user',
    name: 'John',
    age: 28,
    occupation: 'Engineer'
};

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
// retrieving
const admin: Admin = {
    type: 'admin',
    name: 'Jane',
    age: 35,
    role: 'Administrator'
};
// 1..
let obj : {
    title : string,
    status : boolean,
    id:number
} = {
    title : "Suraj Singh",
    status : false,
    id : 5
}

// 2...
interface Name {
    firstname: string;
    lastname?: string;
}
  
function getName({ firstname, lastname }: Name): string {
    if (lastname) {
      return `${firstname} ${lastname}`;
    } else {
      return firstname;
    }
}

const person1: Name = { firstname: "Suraj", lastname: "Singh" };
const person2: Name = { firstname: "Suraj" };

console.log(getName(person1)); 
console.log(getName(person2)); 


// 3...

interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

// 4....
interface PersonDetails {
    prefix?: string;
    phones: number[];
    addresses: Address[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}

const personDetailsList: PersonDetails[] = [];

function PhoneBook(person: PersonDetails): void {
    personDetailsList.push(person);
}

const person3: PersonDetails = {
  prefix: "Mr.",
  phones: [1234567890, 2345678901],
  addresses: [
    {
      houseNumber: 1,
      street: "Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA",
    },
  ],
  email: "john.doe@example.com",
  firstname: "John",
  lastname: "Doe",
  middlename: "Smith",
};

PhoneBook(person3);

console.log(personDetailsList);
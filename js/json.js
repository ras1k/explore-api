const user = {id: 1, name: 'Rasik', job: 'developer' };
// console.log(user);
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
    owner : 'Alia',
    address : 'Dhaka',
    Country: 'BD',
    prodocts : ['Laptop', 'Mobile', 'Keyboard', 'Mouse'],
    revenue : 45000,
    isOpen : true,
    isNew : false
};
// console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
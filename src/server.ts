const { tom } = require('./example');

function mirror(item: string): string {
    return item;
}

const mirror2 = (item: string): string => {
    return item;
}

console.log(tom.name);

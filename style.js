const newName = require('./name')
const arrayHobbies = require('./hobby')

function person(){
    const name = newName('Paolo', 'Brosio');
    const hobbies = arrayHobbies('lettura', 'tennis', 'pesca');
        return {...name , ...hobbies}
};

console.log(person());
const findTheOldest = function(people) {    
    
    let oldest ={};
    let oldestAge = 0;

    people.forEach((person)=>{
        
        if (person.hasOwnProperty('yearOfDeath')){

            personAge = person.yearOfDeath - person.yearOfBirth;

            if (personAge > oldestAge){
                oldestAge = personAge;
                oldest = person;
            }

        } else {

            personAge = new Date().getFullYear() - person.yearOfBirth ;

            if (personAge > oldestAge){

                oldestAge = personAge;

                oldest = person;
            }
        }
        
    })

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

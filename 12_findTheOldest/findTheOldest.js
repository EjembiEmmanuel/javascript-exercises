const findTheOldest = function(obj) {
    let oldest = "";
    let currentAge;
    let previousAge = 0;

    obj.forEach(function(obj) {
        if(!obj.yearOfDeath) {
            currentAge = 2022 - obj.yearOfBirth;
            previousAge = currentAge;
            oldest = obj;
        }
        if(obj.yearOfDeath) {
            currentAge = obj.yearOfDeath - obj.yearOfBirth;
            if(currentAge > previousAge) {
                previousAge = currentAge;
                oldest = obj;
            }
        }
        
    });

    return oldest;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942, 
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;

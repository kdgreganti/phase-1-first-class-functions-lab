// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers() {
    return drivers.slice(0, 2);
} 

const firstTwoDrivers = returnFirstTwoDrivers(drivers);
    console.log(firstTwoDrivers);

function returnLastTwoDrivers() {  
    return drivers.slice(2, 4);
}

const lastTwoDrivers = returnLastTwoDrivers(drivers);
    console.log(lastTwoDrivers); 


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    }
}

function fareDoubler(fare) {
    const fareMultiplier = createFareMultiplier(2);
    return fareMultiplier(fare);
}

function fareTripler(fare) {
    const fareMultiplier = createFareMultiplier(3);
    return fareMultiplier(fare);
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}

const twoFirstDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(twoFirstDrivers);


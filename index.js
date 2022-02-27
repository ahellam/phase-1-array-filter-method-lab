// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversArr, string){
   return driversArr.filter(elem => elem.toLowerCase() === string.toLowerCase())
}
function fuzzyMatch(driversArr, string){ 
    return driversArr.filter(driverName => driverName.startsWith(string)) 
}
    
function matchName(driversArr, string){
    return driversArr.filter(driverObj => driverObj.name === string)
}



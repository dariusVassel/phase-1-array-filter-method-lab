// Code your solution here
// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(listDriver, nameDriver){
  let filtered = listDriver
    .filter(x => x === nameDriver)
  let filtered2 = listDriver
    .filter (y => y === nameDriver.toLowerCase());
    //.filter (x => x === nameDriver.toLowerCase())
  
  console.log(filtered);
  console.log(filtered2);
  let filterCompiled = filtered.concat(filtered2);
  return filterCompiled
} 
//Check for how one-one matches are possible

function fuzzyMatch(listDriver, nameDriver){
    let firstLetterFilter = listDriver
        .filter(x => x[0] === nameDriver[0])
  let secondLetterFilter = listDriver
     .filter(y => y[0,1]===nameDriver[0]+ nameDriver[1])

  let filterCompiled = firstLetterFilter.concat(secondLetterFilter);
  return filterCompiled
}

function matchName(listDriver, nameDriver){
    let objectFilter =  listDriver
        .filter(x => x.name === nameDriver)
    return objectFilter
}
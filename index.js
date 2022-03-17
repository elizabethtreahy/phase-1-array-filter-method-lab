// Code your solution here

function findMatching(drivers, thingImLookingFor) {
  return drivers.filter((x) => x.toLowerCase() === thingImLookingFor.toLowerCase());
}

function fuzzyMatch(drivers, otherThingImLookingFor) {
  return drivers.filter((x) => x.toLowerCase().indexOf(otherThingImLookingFor.toLowerCase()) === 0);
}

function matchName(drivers, lastThingImLookingFor) {
  return drivers.filter((x) => x.name === lastThingImLookingFor);
}

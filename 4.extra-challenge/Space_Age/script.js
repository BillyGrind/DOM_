let Mercury = 0.2408467;
let Venus = 0.61519726;
let Earth = 1.0;
let Mars = 1.8808158;
let Jupiter = 11.862615;
let myAg

function spaceAge(sec, planet) {
  let myAge = 28 * sec;

  let age = (myAge/sec)*planet;

  return age;
}

console.log(spaceAge(365.25 * 24 * 60 * 60, Earth));

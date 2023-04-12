// streets = paralle
// avenues = perpendicular


function manhattan(streetA, avenueA, streetB, avenueB){

    let distance = Math.abs(streetB-streetA) + Math.abs(avenueB-avenueA);
    return distance;
}

console.log(manhattan(5,4,3,2));
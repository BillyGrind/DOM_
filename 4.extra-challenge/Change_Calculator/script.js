function computeChange(price, moneyHanded) {
  let change = parseFloat(moneyHanded - price);
  console.log(change);
  let newArray = [];

  if ((price & moneyHanded) != String && (price & moneyHanded) > 0) {
    for (i = 0; change > 0; i++) {
      if (change >= 20) {
        newArray.push(20);
        change -= 20;
      } else if (change >= 10) {
        newArray.push(10);
        change -= 10;
      } else if (change >= 5) {
        newArray.push(5);
        change -= 5;
      } else if (change >= 5) {
        newArray.push(5);
        change -= 5;
      } else if (change >= 2) {
        newArray.push(2);
        change -= 2;
      } else if (change >= 1) {
        newArray.push(1);
        change -= 1;
      } else if (change >= 0.5) {
        newArray.push(0.5);
        change -= 0.5;
      } else if (change >= 0.2) {
        newArray.push(0.2);
        change -= 0.2;
      } else if (change >= 0.1) {
        newArray.push(0.1);
        change -= 0.1;
      }
      // console.log(newArray);
      //return newArray;
    }
    return newArray;
  } else if (moneyHanded > price) {
    return newArray;
  } else {
    return newArray;
  }
}

console.log(computeChange(15.5, 50));

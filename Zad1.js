//1729 --> true
// 1729 = 9³ + 10³
// = a³ + b³
//n = a³
//+ b³
// console.log(firstCube);

//81
function hasTwoCubeSums(n) {
  //Math.cbrt(n);
  let NumSbrt = n;
  let count = 0;

  for (let firstCube = 0; firstCube <= NumSbrt; firstCube++) {
    for (let secondCube = 0; secondCube <= NumSbrt; secondCube++) {
      if (
        firstCube != secondCube &&
        Math.pow(secondCube, 3) + Math.pow(firstCube, 3) == NumSbrt
      ) {
        count++;

        for (let thirdCube = 0; thirdCube <= NumSbrt; thirdCube++) {
          for (let fourthCube = 0; fourthCube <= NumSbrt; fourthCube++) {
            thirdCube++;
            if (
              Math.pow(thirdCube, 3) + Math.pow(fourthCube, 3) == NumSbrt &&
              thirdCube != fourthCube &&
              firstCube != thirdCube &&
              firstCube != fourthCube &&
              secondCube != thirdCube &&
              secondCube != fourthCube
            ) {
              count++;
              return true;
            }
          }
        }
      }
    }
  }
  return false;
}

console.log(hasTwoCubeSums(42));

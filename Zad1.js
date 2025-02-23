
function hasTwoCubeSums(n) {
  let NumCbrt = Math.cbrt(n);
  let count = 0;

  for (let firstCube = 0; firstCube <= NumCbrt; firstCube++) {
    for (let secondCube = 0; secondCube <= NumCbrt; secondCube++) {
      if (
        firstCube != secondCube &&
        Math.pow(secondCube, 3) + Math.pow(firstCube, 3) == n
      ) {
        count++;

        for (let thirdCube = 0; thirdCube <= NumCbrt; thirdCube++) {
          for (let fourthCube = 0; fourthCube <= NumCbrt; fourthCube++) {
            thirdCube++;
            if (
              Math.pow(thirdCube, 3) + Math.pow(fourthCube, 3) == n &&
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

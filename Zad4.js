
function findMissing(list) {
  let len = list.length;
  let d = Math.round((list[len - 1] - list[0]) / (len + 1));


  for (let i = 0; i < len - 1; i++) {
    if (list[i + 1] - list[i] == d) {
      continue;
    } else {
      return list[i] + d;
    }
  }
}

list = [1, 3, 7, 9, 11];
console.log(findMissing(list));
    
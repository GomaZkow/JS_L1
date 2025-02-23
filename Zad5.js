function primeFactors(n) {
  let str = "";
  for (let i = 2; i <= n; i++) {
    let count = 0;
    while (n % i == 0) {
      n /= i;
      count++;
    }
    if (count > 0) {
      if (count == 1) {
        str += `(${i})`;
      } else {
        str += `(${i}**${count})`;
      }
    }
  }
  return str;
}

let list = 777;
console.log(primeFactors(list));

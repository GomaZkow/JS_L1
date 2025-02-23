function toWeirdCase(string) {
  let strin = "";
  let index = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      strin += " ";
      index = 0;
    } else {
      if (index % 2 == 0) {
        strin += string[i].toUpperCase();
      } else {
        strin += string[i].toLowerCase();
      }
      index++;
    }
  }
  return strin;
}

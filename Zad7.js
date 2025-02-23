function wave(str) {
  let waveArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      let charArray = str.split("");
      charArray[i] = charArray[i].toUpperCase();
      waveArray.push(charArray.join(""));
    }
  }
  return waveArray;
}

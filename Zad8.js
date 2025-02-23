function expandedForm(num) {
  let str = num.toString();
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] != "0") {
      let zeros = "";
      for (let j = i + 1; j < str.length; j++) {
        zeros += "0";
      }
      result.push(str[i] + zeros);
    }
  }

  return result.join(" + ");
}

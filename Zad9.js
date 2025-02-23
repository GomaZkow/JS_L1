function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    let pair = str[i] + (str[i + 1] || "_");
    result.push(pair);
  }
  return result;
}
console.log(solution("asssssfaf"));

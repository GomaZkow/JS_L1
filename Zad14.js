function longest(arr, n) {
  arr.sort((a, b) => b.length - a.length);
  return arr[n - 1];
}


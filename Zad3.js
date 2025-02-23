function whatCentury(year) {
  let century = Math.floor(year / 100 + (year % 100 == 0 ? 0 : 1));
  return WhatEnd(century);
}
function WhatEnd(century) {
  if (11 <= century && century <= 13) {
    return century + "th";
  } else if (century % 10 == 1) {
    return century + "st";
  } else if (century % 10 == 2) {
    return century + "nd";
  } else if (century % 10 == 3) {
    return century + "rd";
  } else {
    return century + "th";
  }
}

console.log(whatCentury(2011));

function bingo(ticket, win) {
  let miniwin = 0;
  for (let i = 0; i < ticket.length; i++) {
    let [str, num] = ticket[i];
    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) == num) {
        miniwin++;
      }
    }
  }

  return win <= miniwin ? "Winner!" : "Loser!";
}

function building(input) {
    let floors = Number(input[0]);
    let rooms = input[1];
    let line = "";
    for (let f = floors; f >= 1; f--) {
      line = "";
      for (let r = 0; r < rooms; r++) {
        if (f === floors) {
          line += `L${f}${r} `;
        } else if (f % 2 !== 0) {
          line += `A${f}${r} `;
        } else {
          line += `O${f}${r} `;
        }
      }
      console.log(line);
    }
  }
  building(["9", "5"]);
  
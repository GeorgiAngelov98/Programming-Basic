function vacationBooksList(input) {
  let numOfPage = Number(input[0]);
  let pageForHoaur = Number(input[1]);
  let numOfDay = Number(input[2]);
  let allTimeRead = numOfPage / pageForHoaur;
  let needHours = allTimeRead / numOfDay;
  console.log(needHours);
}
vacationBooksList(["212 ", "20 ", "2 "]);

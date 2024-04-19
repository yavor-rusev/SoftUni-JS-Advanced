function previousDay(year, month, date) {
    let inputDate = new Date(year, month - 1, date);
    inputDate.setDate(inputDate.getDate() - 1);

    let searchedYear = inputDate.getFullYear();
    let searchedMonth = inputDate.getMonth() + 1;
    let searchedDate = inputDate.getDate();

    console.log(`${searchedYear}-${searchedMonth}-${searchedDate}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);
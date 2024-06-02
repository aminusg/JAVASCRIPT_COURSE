import moment from 'moment';
//Epoch timestamp - number of seconds that have elapsed since January 1, 1970
console.log(moment.now());

//Creating a date object for right now:
const rightNow = moment();
console.log(rightNow);
//Creating Date object with a specific format
const birthday = moment('11-02-1970', 'DD-MM-YYYY');
console.log(birthday);
//Querying day of the week of a date
console.log(birthday.format('dddd'));

//si quiero saber hace cuánto tiempo fue (crear un contador)
console.log(birthday.fromNow());

//también se pueden realizar algunos cálculos:
const twoWeeksFromNow = moment().add(14, 'days');
console.log(twoWeeksFromNow);
console.log(twoWeeksFromNow.toString());
const sixMonthsAgo = moment().subtract(6, 'm');

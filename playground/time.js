var moment = require('moment');

// var date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));
var createdAt = new Date().getTime();

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment(createdAt);
console.log(date.format('h:mm a'));

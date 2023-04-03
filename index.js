let s = '07:05:45PM';
s = '07:05:45PM';
s = '1:00:00PM';

const objTime = {
  1: '13',
  2: '14',
  3: '15',
  4: '16',
  5: '17',
  6: '18',
  7: '19',
  8: '20',
  9: '21',
  10: '22',
  11: '23',
  12: '12',
};

const arrayTime = s.split(':');
const abbr = arrayTime[2].slice(2);


let hourString = arrayTime[0];
const minuteString = arrayTime[1];
const secondstring = arrayTime[2].slice(0, 2);

const hour = parseInt(hourString);
let finalTime = '';

if (abbr === 'PM') {
  hourString = objTime[hour];
} else {
  hour === 12 && (hourString = '00');
}

finalTime = `${hourString}:${minuteString}:${secondstring}`;


console.log(hour);
console.log(finalTime);

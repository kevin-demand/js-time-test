// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const operatingHours = [
  {
    id: '5b6901b6-aec5-469e-a643-6026a6ffc2a4',
    createdDateUtc: '0001-01-01T00:00:00',
    lastModifiedDateUtc: '0001-01-01T00:00:00',
    createdByUserId: null,
    lastModifiedByUserId: null,
    siteId: 'bdd5aa2c-7bb2-4443-9b75-4bbef9f97607',
    day: 'Wednesday',
    openHour: '08:30:00',
    closeHour: '17:30:00',
  },
  {
    id: '77cc3690-5d4f-4872-a0ba-fe6777b0c4a3',
    createdDateUtc: '0001-01-01T00:00:00',
    lastModifiedDateUtc: '0001-01-01T00:00:00',
    createdByUserId: null,
    lastModifiedByUserId: null,
    siteId: 'bdd5aa2c-7bb2-4443-9b75-4bbef9f97607',
    day: 'Friday',
    openHour: '08:30:00',
    closeHour: '17:30:00',
  },
  {
    id: 'c70649c2-227c-400d-8d36-0bf97ec4bdde',
    createdDateUtc: '0001-01-01T00:00:00',
    lastModifiedDateUtc: '0001-01-01T00:00:00',
    createdByUserId: null,
    lastModifiedByUserId: null,
    siteId: 'bdd5aa2c-7bb2-4443-9b75-4bbef9f97607',
    day: 'Monday',
    openHour: '08:30:00',
    closeHour: '17:30:00',
  },
  {
    id: 'c968f030-f361-4091-8f30-06ea4c8eae40',
    createdDateUtc: '0001-01-01T00:00:00',
    lastModifiedDateUtc: '0001-01-01T00:00:00',
    createdByUserId: null,
    lastModifiedByUserId: null,
    siteId: 'bdd5aa2c-7bb2-4443-9b75-4bbef9f97607',
    day: 'Thursday',
    openHour: '08:30:00',
    closeHour: '17:30:00',
  },
  {
    id: 'e29593ab-2f37-45c1-a799-c0277ecf5c64',
    createdDateUtc: '0001-01-01T00:00:00',
    lastModifiedDateUtc: '0001-01-01T00:00:00',
    createdByUserId: null,
    lastModifiedByUserId: null,
    siteId: 'bdd5aa2c-7bb2-4443-9b75-4bbef9f97607',
    day: 'Saturday',
    openHour: '09:00:00',
    closeHour: '16:00:00',
  },
];

// //PULL EACH AS STRING
// operatingHours.forEach((element, index, array) => {
//   console.log(element.day);
// });

// operatingHours.forEach((element, index, array) => {
//   console.log(element.openHour);
// });
// operatingHours.forEach((element, index, array) => {
//   console.log(element.closeHour);
// });

// // CREAT ARRAY FOR EACH DAY
// let newDays = operatingHours.map(getOpenDays);
// //.filter();

// function getOpenDays(item) {
//   return [item.day, item.openHour, item.closeHour];
// }

// console.log(newDays);

// let newDaysHours = new Array(
//   'Monday: ',
//   'Tuesday: ',
//   'Wedensday: ',
//   'Thursday: ',
//   'Friday: ',
//   'Saturday: ',
//   'Sunday: '
// );

const myDays = operatingHours.map((item) => {
  const container = {};

  //All days of the week

  //12 hour clock
  const milToStandard = (time) => {
    time = time.split(':'); //array

    //fetch
    const hours = Number(time[0]);
    const minutes = Number(time[1]);

    //clac
    let timeValue;

    if (hours > 0 && hours <= 12) {
      timeValue = '' + hours;
    } else if (hours > 12) {
      timeValue = '' + (hours - 12);
    } else if (hours == 0) {
      timeValue = '12';
    }

    timeValue += minutes < 10 ? ':0' + minutes : ':' + minutes; // get minutes
    timeValue += hours >= 12 ? ' pm' : ' am'; // get AM/PM

    return timeValue;
  };

  container.day = item.day;
  container.closed = milToStandard(item.closeHour);
  container.open = milToStandard(item.openHour);

  return container;
});

const daysOfWeek = [
  { day: 'Monday' },
  { day: 'Tuesday' },
  { day: 'Wednesday' },
  { day: 'Thursday' },
  { day: 'Friday' },
  { day: 'Saturday' },
  { day: 'Sunday' },
];

function add(kday) {
  if (myDays.filter((item) => item.day == kday)) {
    myDays.push({ day: kday, openHour: 'Closed', closeHour: ' ' });
  } else return;
}

add('Friday');

let result = [];

console.log(myDays);

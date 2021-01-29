// let message = 'hi'; // глобальная область видимости
//
// console.log(message);


// if (true) {
//   // область видимости блока if
//   let message = 'hello'; // локальная переменная
//   console.log(message);
// }
// console.log(message);


// function getLengthCircle(len) {
//   // Область видимости функции getSumm
//   let num = 5; // можно и var
//   let result = 2 * num * Math.PI;
//   console.log(result);
// }
// getLengthCircle();
// console.log(result);


function getUrl(domain) {
  return function(url) {
    return `https://${url}.${domain}`
    }
}

const ruUrl = getUrl(`ru`);
const comUrl = getUrl('com');

console.log(comUrl(`webheroschool`));
console.log(ruUrl(`webheroschool`));

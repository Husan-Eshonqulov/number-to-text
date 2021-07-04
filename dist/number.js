"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let ones = ['', 'bir', 'ikki', 'uch', 'to‘rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to‘qqiz'];
let tens = ['', 'o‘n', 'yigirma', 'o‘ttiz', 'qirq', 'ellik', 'oltmish', 'yetmish', 'sakson', 'to‘qson'];
let nameOfGroup = ['', 'ming', 'million', 'milliard', 'trilion', 'kvadrilon', 'kvintilon', 'sekstilon', 'septilon', 'oktalon', 'nonalon', 'dekalon', 'endekalon', 'dodekalon'];

function hundredsToText(num) {
  let res = '';

  if (num === 100) {
    return 'yuz';
  }

  if (num > 99 & num < 1000) {
    res = ones[Math.floor(num / 100)] + ' yuz';
  }

  return res;
}

function tensToText(num) {
  num = num % 100;
  return tens[Math.floor(num / 10)];
}

function onesToText(num) {
  return ones[num % 10];
}

function threeDigitsGroupToText(num) {
  let textForm = '';

  if (typeof num !== 'number') {
    return textForm;
  }

  textForm = hundredsToText(num);
  let tens = tensToText(num);

  if (tens !== '') {
    textForm += ' ' + tens;
  }

  let ones = onesToText(num);

  if (ones !== '') {
    textForm += ' ' + ones;
  }

  return textForm.trim();
} // const num = 123;
// const res = threeDigitsGroupToText(num);
// console.log(res);


function groupingDigits(num) {
  const group = []; // the error in the code

  const strNum = num;
  const length = strNum.length;
  const remainder = length % 3;
  console.log(remainder);
  let tester = 0;
  let string = '';

  for (let i = length - 1; i >= 0; i--) {
    string += strNum[i];
    tester++;

    if (tester % 3 === 0) {
      let str = '';

      for (let j = 2; j >= 0; j--) {
        str += string[j];
      }

      group.push(str);
      string = '';
    }
  }

  let str = '';

  for (let i = 0; i < remainder; i++) {
    str += strNum[i];
  }

  if (str !== '') {
    group.push(str);
  }

  return group;
} // const num = 100000007;
// const res = groupingDigits(num);
// console.log(res);


function convert(num) {
  const group = groupingDigits(num);
  console.log(group);
  let convertedStr = '';
  const length = group.length;

  for (let i = length - 1; i >= 0; i--) {
    if (group[i] !== '' && group[i] !== '000') {
      // console.log(group[i]);
      // console.log(threeDigitsGroupToText(parseInt(group[i])));
      // console.log(nameOfGroup[i]);
      convertedStr = convertedStr + threeDigitsGroupToText(parseInt(group[i])) + " " + nameOfGroup[i] + " ";
    }
  }

  return convertedStr.trim();
} // const num = 10000000000403201;
// const res = convert(num);
// console.log(res);


var _default = convert;
exports.default = _default;
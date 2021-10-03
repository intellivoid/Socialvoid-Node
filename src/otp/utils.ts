import { b32decode } from "./nibbler";

export function rjust(num: string, n: number) {
  let numTmp = num;
  let len = numTmp.toString().length;

  while (len < n) {
    numTmp = `0${numTmp}`;
    len += 1;
  }

  return numTmp;
}

export function arrRjust(arr: any[], n: number) {
  let arrTmp = arr;

  if (n <= arrTmp.length) {
    arrTmp = arrTmp.splice(arrTmp.length - 1 - n);
    return arrTmp;
  }

  const diff = n - arrTmp.length;

  for (let i = 0; i < diff; i += 1) {
    arrTmp.unshift(String.fromCharCode(0));
  }

  return arrTmp;
}

export function byteSecret(secret: string) {
  return b32decode(secret.toUpperCase());
}

export function intToByteString(input: number, padding = 8) {
  let inputTmp = input;
  let result = [];

  while (inputTmp !== 0) {
    result.push(String.fromCharCode(inputTmp & 0xff));
    inputTmp >>= 8;
  }

  result = result.reverse();
  result = arrRjust(result, padding);

  return result.join("");
}

export function timeCode(time: string, interval: number) {
  const timeStr = Date.parse(time).toString();

  const formatTime = timeStr.substring(0, timeStr.length - 3);

  return Number(Number(formatTime) / interval);
}

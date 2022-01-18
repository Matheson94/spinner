const spinnerArr = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ']
let delay = 100;
for (let i = 0; i < spinnerArr.length; i++) {
  setTimeout (() => {
    process.stdout.write(spinnerArr[i]);
  }, delay);
  delay += 200;
}
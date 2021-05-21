function checkYuGiOh(num) {
  let val;
  if (parseInt(num)) {
    return num
  }
  else {
    val = `invalid parameter: "${num}"`;
  }
  return val;
}

console.log(checkYuGiOh("fizzbuzz is meh"));

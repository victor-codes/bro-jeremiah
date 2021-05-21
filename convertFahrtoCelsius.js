function convertFahrtoCelsius(farenheit) {
  let obj = farenheit;
  let val;
  
  if (typeof farenheit === "number" || typeof farenheit === "string") {
    val = (farenheit - 32) * (5 / 9).toFixed(4);
  } else if (Array.isArray(farenheit)) {
    val = `[${farenheit}] is not valid number but a/an array`;
  } else {
    val = `${JSON.stringify(obj)} is not valid number but a/an
      ${typeof farenheit}`;
  }
  return val;
}

console.log(convertFtoT({ temp: 0, tmp: 0 }));

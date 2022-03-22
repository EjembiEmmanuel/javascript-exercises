const ftoc = function(temp) {
  let conversion = 0;
  conversion = ((temp - 32) * (5 / 9));

  if(conversion == 0) {
    return conversion;
  } else {
    return Math.round(conversion * 10) / 10;
  }
  
};

const ctof = function(temp) {
  let conversion = 0;
  conversion = ((temp * (9 / 5)) + 32);

  if(conversion == 0) {
    return conversion;
  } else {
    return Math.round(conversion * 10) / 10;
  }
};

console.log(ftoc(100));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

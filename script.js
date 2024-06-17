var isDate = function (input) {
  //   write your code here
return	!isNaN(Date.parse(input));
};

// Do not change the code below.
const input = propt("Enter Date.");
alert(isDate(input));

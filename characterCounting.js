var input = process.argv.splice(2);
console.log(countLetters(input));

function countLetters(input) {
  var inputString = input.join('');
  var count = {};
  for(var i = 0; i < inputString.length; i++) {
    if(count[inputString.charAt(i)] === undefined) {
      count[inputString.charAt(i)] = 1;
    } else {
      count[inputString.charAt(i)] += 1;
    }
  }
  return count;
}
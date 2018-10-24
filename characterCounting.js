var input = process.argv.splice(2);
console.log(countLetters(input));

function countLetters(input) {
  var inputString = input.join('');
  var count = {};
  for(var i = 0; i < inputString.length; i++) {
    count[inputString.charAt(i)] = (count[inputString.charAt(i)] === undefined) ? 1 : count[inputString.charAt(i)] + 1;
  }
  return count;
}
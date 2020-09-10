var input = `test`;

if (input)
  console.log(reverse(input));

function reverse(original) {
  return original.split('').reverse().join('');
}

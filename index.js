const numbers = [5, 8, -1, '-6', 11, 'ololo', '-2'];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === 'number') {
    sum += numbers[i];
  } else if (!isNaN(parseInt(numbers[i]))) {
    sum += parseInt(numbers[i]);
  }
}
alert('Sum is ' + sum);


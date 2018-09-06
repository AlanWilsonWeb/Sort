var numbers = [8, 6, 7, 5, 3, 1, 9, 2, 4];
var i = 0;
var tempa;
var tempb;

console.log(numbers);
  while (i < numbers.length){
  if (numbers[i] > numbers[i + 1]){
    tempa = numbers[i];
    tempb = numbers[i + 1];
    numbers[i] = tempb;
    numbers[i + 1] = tempa;
    i = -1;
  }
  console.log(numbers);
  i++;
}

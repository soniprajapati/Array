var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];

var i=0
var max=0;
var max2=0;
while (i<numbers.length){

    if (numbers[i]>max)
    max=numbers[i]

    if (numbers[i]>max2 && numbers[i]<max)
    max2=numbers[i]

    i++
}
console.log(max)
console.log(max2)
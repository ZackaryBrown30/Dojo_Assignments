function mma(arr) {
  for (i = 0; i < arr.length; i++) {
     var min = arr[0];
     var max = arr[0];
     var avg = 0;
    var sum = 0;
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i]
    }
    sum = sum + arr[i];
  }
  avg = sum / arr.length;  
  console.log([max,min,avg])
  return max,min,avg;
}
mma ([-1,2,-1,9])
function bubblesort(arr) {
  var temp = arr[0];
  var x = arr.length - 1;
  for (j = 0; j < arr.length - 1; j++) {
    for (i = 0; i < x; i++) {
      var sorted = true;
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
      x--;
      if (sorted === true) {
        return [arr];
      }
    }
  }
}
bubblesort([5, 1, 2, 3, 4]);

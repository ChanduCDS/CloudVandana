function sortArrayDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const numbers = [5, 2, 9, 1, 5, 6];
sortArrayDescending(numbers);
console.log(numbers);

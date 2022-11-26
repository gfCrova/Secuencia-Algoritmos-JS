
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log(countdown(10));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




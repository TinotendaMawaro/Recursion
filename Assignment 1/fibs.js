function fibs(num) {
  const arr = [];

  for(let i=0; i<num; i++){
    if (i === 0 || i === 1) {
      arr.push(i)
    } else if (i > 1) {
      arr.push(arr[i - 2] + arr[i - 1])
    } else {
      console.log("Please insert a positive number")
    }
  }
  console.log(arr);
  return arr;
}

fibs(1);
fibs(2);
fibs(3);
fibs(8);
fibs(40);
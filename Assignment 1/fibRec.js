
function fibsRec(num) {
    if (num <= 0 || isNaN(num)) {
      return "Please enter a valid number."
    } else if (num === 1) {
        return [0]
    } else if (num === 2) {
        return [0, 1]
    } else if (num > 2) {
        return [...fibsRec(num-1), fibsRec(num - 1)[num - 2] + fibsRec(num-1)[num - 3]]
    }
  }
  
  console.log(fibsRec(3));
  console.log(fibsRec(4));
  console.log(fibsRec(5));
  console.log(fibsRec(6));
  console.log(fibsRec(7));
  console.log(fibsRec(8));
  console.log(fibsRec(-1))
  console.log(fibsRec("h3h3"))
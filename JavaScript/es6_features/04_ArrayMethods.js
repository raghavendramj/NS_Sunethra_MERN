// 3 different functions
// 1. Map -> [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
//    Map -> ["dhoni", "kohli", "rohith", "zaheer", "sachin"] -> [5, 5, 6, 6, 6]

function mapExample() {
  let numbers = [1, 2, 3, 4, 5];
  let squares = new Array();
  for (number of numbers) {
    let square = number * number;
    squares.push(square);
  }
  console.log("1.1. ES5 way :- ", squares);

  let squarePredicate = (number) => number * number;
  let squaresUsingMap = numbers.map(squarePredicate);
  console.log("1.2. ES6 way :- ", squaresUsingMap);

  let names = ["dhoni", "kohli", "rohith", "zaheer", "sachin"];
  let namesLengthArray = new Array();
  for (let name of names) {
    let nameLen = name.length;
    namesLengthArray.push(nameLen);
  }
  console.log("2.1. ES5 way :- ", namesLengthArray);

  let calculateLength = (name) => name.length;
  let namesLengthUsingMap = names.map(calculateLength);
  console.log("2.2. ES6 way :- ", namesLengthUsingMap);
}
mapExample();

// 2. Filter -> [1, 2, 3, 4, 5, 6, 7, 8, 9] -> ODD -> [1, 3, 5, 7, 9]
//    Filter -> [1, 2, 3, 4, 5, 6, 7, 8, 9] -> EVEN -> [2, 4, 6, 8]]
// 3. Reduce -> [1, 2, 3, 4, 5] -> sum -> 15
//    Reduce -> [{model:'iphone 14 pro', price: '150'}, {model:'iphone', price: '150'}] -> sum -> 15
//               {model:'samsung', price: '130'}] -> sumOfPrices -> 280

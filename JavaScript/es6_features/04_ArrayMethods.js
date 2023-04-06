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
// mapExample();

// 2. Filter -> [1, 2, 3, 4, 5, 6, 7, 8, 9] -> ODD -> [1, 3, 5, 7, 9]
//    Filter -> [1, 2, 3, 4, 5, 6, 7, 8, 9] -> EVEN -> [2, 4, 6, 8]]

function filterFunctionExample() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let oddNumbers = new Array();
  for (let eachNum of numbers) {
    if (eachNum % 2 != 0) {
      oddNumbers.push(eachNum);
    }
  }
  console.log("1. Odd Number :- ", oddNumbers);

  //3 -> 1. Input, 2. Predicate, 3. Which array function to use
  let isOddNumPredicate = (number) => number % 2 != 0;
  let oddNumbersES6 = numbers.filter(isOddNumPredicate);
  console.log("2. Odd Number :- ", oddNumbersES6);

  let isEvenNumPredicate = (number) => number % 2 == 0;
  let evenNumbersES6 = numbers.filter(isEvenNumPredicate);
  console.log("2. Even Number :- ", evenNumbersES6);
}
// filterFunctionExample();

function filterExample2() {
  let products = [
    {
      catergory: "Mobile",
      name: "IPhone 14",
      price: 150,
    },
    {
      catergory: "Mobile",
      name: "Samsung S22",
      price: 80,
    },
    {
      catergory: "Redmi",
      name: "15 Pro Max",
      price: 130,
    },
    {
      catergory: "Television",
      name: "Sony A84",
      price: 550,
    },
    {
      catergory: "Television",
      name: "LG C2",
      price: 450,
    },

    //Output -> "IPhone 14", "Samsung S22"
    //Output -> "Sony A84", "LG C2"
  ];

  let mobilePredicate = (product) => product.catergory === "Mobile";
  let tvAndPricePredicate = (product) =>
    product.catergory === "Television" && product.price > 400;
  let getNames = (product) => product.name;

  let names = products.filter(tvAndPricePredicate).map(getNames);
  console.log("2. Filtered Product Names :- ", names);
}
// filterExample2();

// 3. Reduce -> [1, 2, 3, 4, 5] -> sum -> 15
//    Reduce -> [{model:'iphone 14 pro', price: '150'}, {model:'iphone', price: '150'}] -> sum -> 15
//               {model:'samsung', price: '130'}] -> sumOfPrices -> 280

function reduceExample() {
  let numbers = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let number of numbers) {
    sum = sum + number;
  }
  console.log("1. Sum of numbers :- ", sum);

  let reducePredicate = (acc, curr) => {
    console.log(`Accumulator :- ${acc} Current value  ${curr}`);
    return acc + curr;
  };
  // let reducedSum = numbers.reduce(reducePredicate);
  // let reducedSum = numbers.reduce(reducePredicate, 150);
  let reducedSum = numbers.reduce(reducePredicate, 0);
  console.log("2. Sum of numbers :- ", reducedSum);
}
// reduceExample();

function practicalReduce() {
  let products = [
    {
      catergory: "Mobile",
      name: "IPhone 14",
      price: 150,
    },
    {
      catergory: "Mobile",
      name: "Samsung S22",
      price: 80,
    },
    {
      catergory: "Mobile",
      name: "Redmi 15 Pro Max",
      price: 130,
    },
    {
      catergory: "Television",
      name: "Sony A84",
      price: 550,
    },
    {
      catergory: "Television",
      name: "LG C2",
      price: 450,
    },
  ];
  // Ask -> Sum of the prices of Mobile phones > $100

  //1. All Mobile phones
  let mobilePred = (product) => product.catergory === "Mobile";
  let mobiles = products.filter(mobilePred);
  console.log("1. Only Mobiles :- ", mobiles);

  //2. Mobile phones > 100
  let pricePred = (product) => product.price > 100;
  mobiles = mobiles.filter(pricePred);
  console.log("2. Mobiles > 100 :- ", mobiles);

  //3. Mobile phone prices only
  let onlyPricePred = (product) => product.price;
  mobiles = mobiles.map(onlyPricePred);
  console.log("3. Mobile Prices :- ", mobiles);

  //4. Sum of mobile phone prices
  let sumOfPricesPred = (a, b) => a + b;
  let sumOfPrices = mobiles.reduce(sumOfPricesPred);
  console.log("4. Sum of Mobile Price > 100 :- ", sumOfPrices);

  let sumInOnelineEx1 = products
    .filter((prod) => prod.catergory === "Mobile")
    .filter((prod) => prod.price > 100)
    .map((prod) => prod.price)
    .reduce((acc, cur) => acc + cur);

  let sumInOnelineEx2 = products
    .filter((prod) => prod.catergory === "Mobile" && prod.price > 100)
    .map((prod) => prod.price)
    .reduce((acc, cur) => acc + cur);

  console.log("5. Sum of Mobile Price > 100 sumInOneline :- ", sumInOnelineEx1);
  console.log(
    "6. Sum of Mobile Price > 100 sumInOnelineEx2 :- ",
    sumInOnelineEx2
  );
}
// practicalReduce();

function sortNumbers() {
  let numbers = [3, 1, 2, 7, 4, 5, 9, 8];
  let ascComparator = (a, b) => a - b;
  let sortedNumbers = numbers.sort(ascComparator);
  console.log("Ascending Order Sorted Numbers :- ", sortedNumbers);

  let descComparator = (a, b) => b - a;
  sortedNumbers = numbers.sort(descComparator);
  console.log("Descending Order Sorted Numbers :- ", sortedNumbers);
}
sortNumbers();

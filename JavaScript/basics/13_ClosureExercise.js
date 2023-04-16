// User has salary x
//     -> fucntion -> increment -> y
//     -> fucntion -> decrement -> z
//     -> fucntion -> getCurrentSalary -> x

function manageSalary(initialSal) {
  let salary = initialSal;

  function incrementFunc(incX) {
    //salary is clousure
    salary += incX;
    console.log("After ", incX, " increment :- " + salary);
  }

  function decrementFunc(decX) {
    //salary is clousure
    salary -= decX;
    console.log("After  ", decX, " Decrement :- " + salary);
  }

  function getSalary() {
    //salary is clousure
    return salary;
  }

  return {
    increment: incrementFunc,
    decrement: decrementFunc,
    salary: getSalary,
  };
}

let testSal = manageSalary(1000);
console.log("Current Salary :- ", testSal.salary());
testSal.increment(250);
testSal.increment(75);
testSal.decrement(120);
testSal.increment(43);

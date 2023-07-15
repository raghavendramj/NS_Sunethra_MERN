let express = require("express");
const application = express();

const employees = [
  { id: 1, name: "John" },
  { id: 2, name: "Mary" },
  { id: 3, name: "Martin" },
];

// Get All Employees
application.get("/employees", (req, res) => {
  res.send(users);
});

// Get Matched Employee
application.get("/employees/:emp", (req, res) => {
  const employeeNameQueried = req.param("emp");
  console.log("Querying for :- ", employeeQueried);
  let matchedEmployee = employees.find(
    (emp) => emp.name === employeeNameQueried
  );
  res.send(matchedEmployee);
});

let port = process.env.PORT || "8082";
application.listen(port, () => console.log(`Listening to the port ${port}`));

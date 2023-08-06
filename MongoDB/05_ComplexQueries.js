const { getDBConnection } = require("./00_utils");
const { Student } = require("./02_Model");
getDBConnection();

async function getStudents(fetchQuery, selectQuery) {
  const students = await Student.find(fetchQuery).select(selectQuery);
  console.log("Students fetched ->", students);
}

function invokeGetStudents() {
  const selectQuery = { _id: 0, name: 1, courseId: 1 };
  
  const findQueryEq = { courseId: { $eq: 2 } };
  const findQueryGt = { courseId: { $gt: 2 } };
  const findQuerylt = { courseId: { $lt: 2 } };
  const findQueryIn = { courseId: { $in: [1, 2] } };
  const findQuerynIn = { courseId: { $nin: [1, 2] } };

  const findQueryRegEx = { name: /ha/ };
  const findQueryRegExStartsWith = { name: /^Ha/ };
  const findQueryRegExEndsWith = { name: /ith$/ };
  const findQueryRegExDotAnyBeforeAndAfter = { name: /.*h.*/ };

  getStudents(findQueryRegExDotAnyBeforeAndAfter, selectQuery);
}
invokeGetStudents();

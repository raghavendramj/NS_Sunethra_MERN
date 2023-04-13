function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
let generatedValues = generateSequence();
console.log("generatedValues -> ", generatedValues);
for (let each of generatedValues) {
  console.log("each -> ", each);
}

function* generateRangeSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
let generatedRangeValues = generateRangeSequence(10, 18);
console.log("generatedRangeValues -> ", generatedRangeValues);
for (let eachRangeValue of generatedRangeValues) {
  console.log("eachRangeValue -> ", eachRangeValue);
}

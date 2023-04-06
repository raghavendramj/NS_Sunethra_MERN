function spreaTest() {
  const nums1 = [1, 2, 3, 4];
  const nums2 = [8, 9, 7, 15];

  const clubbedNums = nums1.concat(nums2);
  console.log("Clubbed nums :- ", clubbedNums);

  const es6Way = [...nums1, ...nums2]
  console.log("Clubbed nums es6Way:- ", es6Way);

  const alongWithOthers = [34, ...nums1, 67, ...nums2, 19, 25]
  console.log("Clubbed nums alongWithOthers:- ", alongWithOthers);
}
spreaTest();

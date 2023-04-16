// we often used an object to emulate a map by mapping a key to a value of any type.
// But using an object as a map has some side effects:

// 1. An object always has a default key like the prototype.
// 2. A key of an object must be a string or a symbol, you cannot use an object as a key.
// 3. An object does not have a property that represents the size of the map.

//Syntax
// let newMap = new Map([iterable]);

let john = { name: "John Doe" };
let lilly = { name: "Lilly Bush" };
let peter = { name: "Peter Drucker" };

let userRoles = new Map();
console.log("typeof(userRoles) :- ", typeof userRoles);
console.log("userRoles instanceof Map :- ", userRoles instanceof Map);

userRoles.set(john, "admin");
userRoles.set(lilly, "editor");
userRoles.set(peter, "subcriber");

console.log("userRoles -> ", userRoles);
console.log("userRolesSec.get(peter) -> ", userRoles.get(peter));

let userRolesSec = new Map([
  [john, "admin"],
  [lilly, "editor"],
  [peter, "subcriber"],
]);

console.log("userRolesSec -> ", userRolesSec);
console.log("userRolesSec.get(john) -> ", userRolesSec.get(john));

let adam = { name: "Adam tucker" };
console.log("userRolesSec.has(adam) -> ", userRolesSec.has(adam));
console.log("userRolesSec.get(adam) -> ", userRolesSec.get(adam));

//Iterating Only Keys
for (const userObjKey of userRoles.keys()) {
  console.log(
    "keys() :: User :- ",
    userObjKey,
    " and role is :- ",
    userRoles.get(userObjKey)
  );
}

//Iterating Only Values
for (const eachValue of userRoles.values()) {
  console.log("values() :: User role:- ", eachValue);
}

//Iterating Entries[key, value]
for (const eachEntry of userRoles.entries()) {
  console.log("eachEntry :- ", eachEntry);
  console.log(
    "entries() :: User :- ",
    eachEntry[0],
    " and role is :- ",
    eachEntry[1]
  );
}

//Iterating using foreach
userRoles.forEach((role, user) => {
  console.log("FOREACH :: User :- ", user, " and role is :- ", role);
});

let keys = [...userRoles.keys()];
console.log("Converted array keys :- ", keys);

let values = [...userRoles.values()];
console.log("Converted array values :- ", values);


userRoles.delete(john);
console.log("\n After deleting john is :- ", userRoles);


userRoles.clear();
console.log("\n After clearing the entire map is :- ", userRoles);
const people = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    id: 3,
    firstName: "Max",
    lastName: "Mustermann",
    age: 32,
  },
  {
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  },
  {
    id: 5,
    firstName: "Luke",
    lastName: "Skywalker",
    age: 23,
  },
];

export function getFirstNames(people) {
  console.log(people.map((person) => person.firstName));
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  console.log(people.map((person) => `${person.firstName} ${person.lastName}`));
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  console.log(
    people.map((person) => `Name: ${person.firstName} Age:  ${person.age}`)
  );

  return people.map(
    (person) => `Name: ${person.firstName} Age:  ${person.age}`
  );
}

export function getPeopleByAge(people, age) {
  console.log(people.filter((person) => person.age === age));
  return people.filter((person) => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  console.log(people.filter((person) => person.age > age));
  return people.filter((person) => person.age > age);
}

export function getPeopleByLastName(people, lastName) {
  console.log(people.filter((person) => person.lastName === lastName));
  return people.filter((person) => person.lastName === lastName);
}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getFullNamesSortedByAge(people) {}

getFullNames(people);
getNameAndAge(people);
getPeopleByAge(people, 21);
getPeopleNamesOlderThan(people, 21);
getPeopleByLastName(people, "Skywalker");

// TYPAGE EXERCICE

// Exercice n°1
// créer un type pour ces deux Object
const people:People = {
  name: "Tomi",
  age: 21,
  isStudent: true,
};
const secondPeople:People = {
  name: "Jade",
  age: 24,
  isStudent: false,
};
// your code here
class People{
  name:string;
  age: number;
  isStudent: boolean;
}
// Exercice n°2
// Créer un type pour cette Array
const peoples:Array<People> = [people, secondPeople];
// your code here

// Exercice n°3
// créer type pour la variable gender qui peut contenir soit male soit female en valeur
const gender = "female";
// your code here

// Exercice n°4
// Réecris la fonction suivante en la typant
function example(name:string) {
  return `son nom est ${name}`;
}

// your code here


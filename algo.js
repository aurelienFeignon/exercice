// ALGO EXERCICE

// Completer la fonction pour multiplier par deux chaque itération du tableau
function multiple(arr) {
  return arr.map((n)=>n*2);
}
console.log(multiple([1, 2, 3])); // [2, 4, 6]

// Completer la fonction pour retenir que les personnes ayant plus de 18ans sans créer de variable
function handleMajeurOnly(arr) {
  return arr.filter((people)=>people.age>=18);
}
console.log(
  handleMajeurOnly([
    { name: "Tomi", age: 14 },
    { name: "Tata", age: 29 },
    { name: "Toto", age: 10 },
    { name: "Plop", age: 20 },
  ])
); // [{ name: "Tata", age: 29 },{ name: "Plop", age: 20 }]

// Completer la fonction qui permet de renvoyer le total de l'addition de chaque itération d'un tab sans créer de variable
function total(arr) {
  return arr.reduce((a,b)=>a+b);
}
console.log(total([1, 2, 3])); // 6

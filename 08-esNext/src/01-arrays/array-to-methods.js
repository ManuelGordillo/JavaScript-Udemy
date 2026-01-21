const heroes = ["Batman", "Superman", "Flash", "Aquaman"];
//heroes.sort(); //mutable
// const heroesCopy = heroes;

const deleteHero = heroes.splice(0, 2, "Green Lantern");
// const deleteHero = heroes.toSpliced(0, 2, "Green Lantern");

// const sortedHeroes = heroes.toSorted();
// heroes.reverse();

//const reversedHeroes = heroes.toReversed();

console.table(heroes);
console.table({ deleteHero });
// console.table(sortedHeroes);
//console.table(reversedHeroes);

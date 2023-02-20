const rocks = [
    {name: "Rombeporfyr", age: 50},
    {name: "Flintesten", age: 47},
    {name: "Smaragd", age: 100_000_000},
    {name: "diamant", age: 200_000_003}

];

// Loop methods toolbox:
// Loop methods: map, filter, find, reduce, sort, forEach


// assignment: make all years one year older


const rocksAgedOneYear = rocks.map(rock => {
    return {...rock, age: rock.age+1};
});
console.log(rocksAgedOneYear);
// console.log(rocks);

const evenAgedRocks = rocks.filter((rock)=> rock%2 === 0);
console.log(evenAgedRocks);

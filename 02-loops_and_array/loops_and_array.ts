// First Loop
for(let i=0; i < 5; i++) {
    console.log(`num = ${i}`);
}

// Second Loop - Looping data from array
let array: number[] = [5, 5, 4.5, 1, 3]
for(let i=0; i < array.length; i++) {
    console.log(array[i]);
}

// Third Loop - Looping to math operation
let total: number = 0;
for(let i=0; i < array.length; i++) {
    console.log(array[i]);
    total += array[i];
}

let average: number = total / array.length;
console.log(average);

// Fourth Loop - Simplified Loop
let names_database: string[] = ["Rafael", "Alex", "Ana", "Renata"]
for(let fistname of names_database) {
    console.log(fistname);
}

// Push a new elemet in a array
names_database.push("José");
for(let fistname of names_database) {
    console.log(fistname);
}
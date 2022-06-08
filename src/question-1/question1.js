const animals = ["Dog", "Cat", "Bear", "Whale"];

function reverseArray(input) {
    let reversed = new Array;
    for(let i = input.length - 1; i >= 0; i--) {
        reversed.push(input[i]);
    }
    return reversed;
}

reverseArray(animals);
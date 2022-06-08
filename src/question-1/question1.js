const animals = ["Dog", "Cat", "Bear", "Whale"];

function reverseArray(input) {
    let animals2= new Array;
    for(let i = input.length - 1; i>=0;i--) {
        animals2.push(input[i]);
    }
    console.log(animals2)
}

reverseArray(animals)
function cutFruit(fruit){
    return fruit * 4;
}

function juicer(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);
    const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces.`;
    return juice;
}
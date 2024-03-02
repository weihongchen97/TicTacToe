//Your main goal here is to have as little global code as possible.
//Try tucking as much as you can inside factories.

//formulate logic first
//Personally I'm thinking that we create a div from 1-9,
//then the number combinations that will be considered a victory

//Consider player 1 being X and player 2 being O

const winningCombo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];


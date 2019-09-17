
let words = ["grass", "train", "plane", "carrot", "dog", "var", "let", "const"];
let guessWord = [];
let guessAmount = 6;
let modal = document.getElementById('modal');
let close = document.getElementById('close');
let rules = document.getElementById('rules');
let word = document.getElementById('input');
let submit = document.getElementById('submit')

let newWord = document.getElementById('guessingWord');

function dropBox() {
    modal.style.display = 'none';
}
function ruleOpen() {
    modal.style.display = 'block';

}
function wordSelect() {
    let word = input.value;
    console.log(input.value);

    // newWording.appendChild(word);
    
    // document.body.appendChild(newWord);
}

let guessingWord = words[Math.floor(Math.random()* words.length)];
for(let i = 0; i < guessingWord.length; i++){
    guessWord[i] = "_";
}
let remainingLetters = guessingWord.length;

//////////////////------------Main game loop-------------

// while(remainingLetters > 0){
    //     guessWord.join(" ");
    
    // }
    ///Had help from carlos for this.
    submit.addEventListener('click', () => {
        console.log(word.value);
        let newDiv = document.createElement('div')
        let newContent = document.createTextNode(`${input.value}`)
    newDiv.appendChild(newContent)
    newWord.appendChild(newDiv)
  })




rules.addEventListener('click', ruleOpen)
close.addEventListener('click', dropBox);
//submit.addEventListener('click', wordSelect)
/*
            --------------------Basics of what I need------------------
A basic function to guess the word you input first.
You get 6 wrong guesses
A key board with each letter of the alphabet
A guess line with underscores for how many letters the hidden word has
The letter dissapears after selected
If the letter is correct display on guess line, if not it will take away a guess and display body part



                -----------Hangman Game function----------------
                o through every time length of the word is greater than zero it should seperate each letter 
                extract each letter and put them in seperate underline or letter box





            --------------------Extra I would like------------------
Random letter bank
has random button option instead of word you choose
Maybe add pictures instead of letter for body parts


*/
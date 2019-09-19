
 let modal = document.getElementById('modal');
 let close = document.getElementById('close');
 let rules = document.getElementById('rules');
 let words = ["grain", "wheat", "train", "plane", "car", "dog", "var", "let", "const", "group", "learn", "sweat", "orange", "host", "list", "group", "word", "role", "alien", "ufo", "space", "bread", "destroy", "humans"];
 let randomWord = Math.floor(Math.random() * words.length);
 let chosenWord = words[randomWord];
 let arrWord = chosenWord.split(", ");
 let rightWord = [];
 let wrongWord = [];
 let underScore = [];
 let guessAmount = 7;
 let domUnderScore = document.getElementsByClassName('underscore');
 let domRightGuess = document.getElementsByClassName('rightguess');
 let domWrongGuess = document.getElementsByClassName('wrongguess');
 
 let base = document.getElementById('base');
let pic1 = document.getElementById('gallow1');
let pic2 = document.getElementById('gallow2');
let pic3 = document.getElementById('gallow3');
let pic4 = document.getElementById('gallow4');
let pic5 = document.getElementById('gallow5');
let pic6 = document.getElementById('gallow6');
 //create underscore based on length of words
 let generateUnderScore = () => 
    {
     for(let i = 0; i < chosenWord.length; i++){
         underScore.push("_");
        }
        return underScore;
    }
    console.log(rightWord);
    console.log(chosenWord);
    console.log(underScore);
    console.log(generateUnderScore());
    
    //user guess
   
    


//-------------------------------------------------------------Main Game--------------------------------------------------------//
document.addEventListener('keypress', (event) => {
    //https://www.w3schools.com/jsref/event_key_keycode.asp
            let keycode = event.keyCode;
            let keyword = String.fromCharCode(keycode);
        
        //if Users guess is right
                    if(chosenWord.indexOf(keyword) > -1)
                    {
                        //add to right words array
                        // for(let i = 0; i < chosenWord.length; i++){
                            rightWord.push(keyword);
                        console.log(rightWord);
                        
                        //check for if word has 2 letters
                    // }if(rightWord.value > 2){
                    //     return;
                        //if wrong put in wrong word array and deduct guess amount
                    }else
                                {
                                    wrongWord.push(keyword);
                                    guessAmount -= 1;
                                    console.log(wrongWord);
                                    console.log(guessAmount);
                                    console.log(guessAmount);
                                }
            //replace underscore with right or wrong letter
                                                    underScore[chosenWord.indexOf(keyword)] = keyword;
                                                    domUnderScore[0].innerHTML = underScore.join(' ');
                                                    domRightGuess[0].innerHTML = rightWord;
                                                    domWrongGuess[0].innerHTML = wrongWord;
                                                    console.log(rightWord);
                                                    console.log(chosenWord);
                                                    console.log(underScore);
                                                    console.log(arrWord);
                                                    console.log(keycode);
                
                //check to see if user word matches guess
                let checkWin = () => 
                {

                    
                    // value
                    if(underScore.value == chosenWord.value && rightWord.length == chosenWord.length)
                    {
                        setTimeout(function(){alert('you win')}, 100);
                        return;
                    }
                    if(guessAmount <= 0)
                    {
                        setTimeout(function(){alert('you lose')}, 500);
                     }
                
                
                }
                let newDiv = document.createElement('span')
                let newContent = document.createTextNode(`You have ${guessAmount} guesses remaining.`)
                newDiv.appendChild(newContent)
                document.body.appendChild(newDiv)
                newDiv.style.display = 'hidden';

                    changePic();
                    checkWin();
            });
        
                
                let changePic = () => {
                    if(guessAmount === 5){
                        base.style.display = 'none';
                        pic1.style.display = 'block';
                    }if(guessAmount === 4){
                        pic1.style.display = 'none';
                        pic2.style.display = 'block';
                    }if(guessAmount === 3){
                        pic2.style.display = 'none';
                        pic3.style.display = 'block';
                    }if(guessAmount === 2){
                        pic3.style.display = 'none';
                        pic4.style.display = 'block';
                    }if(guessAmount === 1){
                        pic4.style.display = 'none';
                        pic5.style.display = 'block';
                    }if(guessAmount === 0){
                        pic5.style.display = 'none';
                        pic6.style.display = 'block';
                        pic6.style.zIndex = 2;
                    }
                    
                }


                
                rules.addEventListener('click', () => {
                    modal.style.display = 'block';
                });
                
                
                close.addEventListener('click', () => {
                    modal.style.display = 'none';});
                    // let newDiv = document.createElement('div')
                    // let newContent = document.createTextNode(`${guessAmount}`)
                    // newDiv.appendChild(newContent)
                    // document.body.appendChild(newDiv)});
                    //});
                    
                    
                    





                    //  let attribute = underScore.getAttribute();
//  console.log(attribute)
 //choose word randomly
 //get users guess
 //check if guess is right
 //if right push to screen
 //if wrong push to wrong array
                    
                    // close.addEventListener('click', () => {
                        //             console.log(underScore);
                        //             let newDiv = document.createElement('h4')
                        //             let newContent = document.createTextNode(`${guessAmount}`)
                        //         newDiv.appendChild(newContent)
                        //         document.body.appendChild(newDiv)});
                        
                        //rightWord.length === chosenWord.length && 
                        
                        
                        
                        
                        //loop through all the items in an array to make sure they do have the same value
                        
                        
                        
                        
                        // for( i = 0; i > chosenWord.length; i++){
                        //     if(arrWord.value == chosenWord.value){
                        //         alert('winner')
                        //     }
                        // }
                        
                        
                        
                        
                        
        
       
        // let word = document.getElementById('input');
        // let submit = document.getElementById('submit');
        // let random = document.getElementById('random');
        //let newWord = document.getElementById('guessingword');
        
        
        //let guessWord = [];
        
        
        
//generateUnderScore();
    //////////////////------------Main game loop-------------
//    var remainingLetters = chosenWord.length;
    
//     while(remainingLetters > 0){
//             let newDiv = document.createElement('div');  
//             let choice =  guessWord.join(" ")
//             newDiv.appendChild(choice);
//             var guess = keyboards;
//                 ///if cancle is selected
//                 if(guess == null){
//                             //end loop
//                         break;
//                         //if guess is more than one letter
//                     }else if (guess.length !== 1){
//                             alert('use single letter');
//                             //valid guess
//                         }else{
//                                 //update the game state with the guess
//                                 for(var j = 0; j < guessingWord.length; j++){
//                                         //if the letter the guess is in the word
                        
//                                         if(guessingWord[j] === guess){
//                                                 //update answer array
//                                                 guessWord[j] = guess;
//                                                 //subtract one from remaining
//                                                 remainingLetters--;
//                                             }
//                                         }
//                                     }
                            //         ///////---------end game loop---------////
                            // }
                            
                            
                            
                            
    ///Had help from carlos for this.
//     submit.addEventListener('click', () => {
//         console.log(word.value);
//         let newDiv = document.createElement('div')
//         let newContent = document.createTextNode(`${input.value}`)
//     newDiv.appendChild(newContent)
//     newWord.appendChild(newDiv)
//   })

//console.log(newWord)
//console.log(newContent)
//console.log(submit)

//underScores[0].innerHTML = underScore().join(' ');

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
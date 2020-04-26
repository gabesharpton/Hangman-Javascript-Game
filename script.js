
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
    
    generateUnderScore();
  


//-------------------------------------------------------------Main Game--------------------------------------------------------//
document.addEventListener('keypress', (event) => {
    
    
            let keyword = String.fromCharCode(event.keyCode);
        
        //if Users guess is right
                    if(chosenWord.indexOf(keyword) > -1)
                    {
                     
                            rightWord.push(keyword);
                       
                    }else
                                {
                                    wrongWord.push(keyword);
                                    guessAmount -= 1;
                                  
                                }
            //replace underscore with right or wrong letter
                                                    underScore[chosenWord.indexOf(keyword)] = keyword;
                                                    domUnderScore[0].innerHTML = underScore.join(' ');
                                                    domRightGuess[0].innerHTML = rightWord;
                                                    domWrongGuess[0].innerHTML = wrongWord;
                                                  
                
                //check to see if user word matches guess
                let checkWin = () => 
                {
                    // value
                    if(underScore.value === chosenWord.value && rightWord.length === chosenWord.length)
                    {
                        setTimeout(function(){alert('you win')}, 100);
                        return;
                    }
                    if(guessAmount <= 0)
                    {
                        setTimeout(function(){alert('you lose')}, 500);
                    }
                }
               
                changePic();
                checkWin();
            });
            
            console.log(chosenWord);


            let changePic = () => 
            {
                // I would think about how you could DRY this up!
                    if(guessAmount === 5)
                    {
                        base.style.display = 'none';
                        pic1.style.display = 'block';

                    }
                    if(guessAmount === 4)
                    {
                        pic1.style.display = 'none';
                        pic2.style.display = 'block';

                    }
                    if(guessAmount === 3)
                    {
                        pic2.style.display = 'none';
                        pic3.style.display = 'block';

                    }
                    if(guessAmount === 2)
                    {
                        pic3.style.display = 'none';
                        pic4.style.display = 'block';

                    }
                    if(guessAmount === 1)
                    {
                        pic4.style.display = 'none';
                        pic5.style.display = 'block';

                    }
                    if(guessAmount === 0)
                    {
                        pic5.style.display = 'none';
                        pic6.style.display = 'block';
                        pic6.style.zIndex = 2;
                    }
                    
            }


                
rules.addEventListener('click', () => {modal.style.display = 'block'});
                
                
close.addEventListener('click', () => {modal.style.display = 'none'});
                   
                    
                    
                    

/*
            --------------------Basics of what I need------------------
A basic function to guess the word that is selected.
You get 6 wrong guesses
A guess line with underscores for how many letters the hidden word has
The letter dissapears after selected
If the letter is correct display on guess line, if not it will take away a guess and display body part

            --------------------Extra I would like------------------
user inputs guessing word
game counter
reset button
*/

//https://www.w3schools.com/jsref/event_key_keycode.asp

////////------------------------------------------------------NONSENSE-----------------------------------------------------/////

                  
 //choose word randomly
 //get users guess
 //check if guess is right
 //if right push to screen
 //if wrong push to wrong array
                    
                
                        
                        
                        
                        //loop through all the items in an array to make sure they do have the same value
                        
                        
                        
                        
                        // for( i = 0; i > chosenWord.length; i++){
                        //     if(arrWord.value == chosenWord.value){
                        //         alert('winner')
                        //     }
                        // }
                        
                        
                        
                        
                        
        
        

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






// console.log(rightWord);
                        
                        //check for if word has 2 letters
                    // }if(rightWord.value > 2){
                    //     return;
                        //if wrong put 

                           //add to right words array
                        // for(let i = 0; i < chosenWord.length; i++){
 // console.log(rightWord);
                                                    // console.log(chosenWord);
                                                    // console.log(underScore);
                                                    // console.log(arrWord);
                                                    //console.log(keycode);
  // console.log(wrongWord);
                                    // console.log(guessAmount);
                                    // console.log(guessAmount);

                                     //in wrong word array and deduct guess amount


                                     // console.log(rightWord);
    // console.log(chosenWord);
    // console.log(underScore);
    // console.log(generateUnderScore());
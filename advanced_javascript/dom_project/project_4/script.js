const form = document.querySelector('form')

let randomGuess = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
const totalGuessesAllowed = 5
let userGuesses = 0
document.querySelector('#guess-remaining').innerHTML=`Guess Remaining : 5`

form.addEventListener('submit',function(event){
    
    event.preventDefault()
    
    const guessNo = parseInt(document.querySelector('#guess').value)
    if(isNaN(guessNo)){
        document.querySelector('#result').innerHTML=`Enter A Valid Number`
    }
    else{
        if(userGuesses<totalGuessesAllowed){
            console.log(randomGuess);
            if(guessNo===randomGuess){
            
                document.querySelector('#result').innerHTML=`You Guess The Correct Number ${randomGuess}`
                document.querySelector('#previous-guess').innerHTML=`Prevoius Guess : `
                document.querySelector('#guess-remaining').innerHTML=`Guess Remaining : `
                userGuesses=0
                randomGuess=parseInt(Math.floor(Math.random() * (40 - 10 + 1)) + 10);
                document.querySelector('#guess').value=''
                document.querySelector('#guess-remaining').innerHTML=`Guess Remaining : 5`
                
            }
            else{
                {
                document.querySelector('#result').innerHTML=`You Guess Is Not Correct`
                userGuesses++
                document.querySelector('#previous-guess').innerHTML=`Prevoius Guess : ${guessNo}`
                document.querySelector('#guess-remaining').innerHTML=`Guess Remaining : ${totalGuessesAllowed-userGuesses}`
                }
            }

        } else{
            document.querySelector('#result').innerHTML=`Max Limit Exceed !!! Try Again`
            document.querySelector('#previous-guess').innerHTML=`Prevoius Guess : `
            userGuesses=0
            randomGuess=parseInt(Math.floor(Math.random() * (40 - 10 + 1)) + 10)
            document.querySelector('#guess-remaining').innerHTML=`Guess Remaining : 5`
            document.querySelector('#guess').value=''

        }
    }

    
})
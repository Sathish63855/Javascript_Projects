// Random NUmber Guessing

const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1)+minNum);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`));

    if(isNaN(guess)){
        window.alert("Please enter the valid number!!!")
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter the value between 50 to 100 only")
    }
    else{
        attempts++;
        if (guess < answer){
            window.alert("Too Low ! Try Again !");
        }
        else if (guess > answer){
            window.alert(" Too High ! Try Again !");
        }
        else{
            window.alert(`Correct ! The Answer is ${answer}.It took you ${attempts} attempts`);
            running = false;
        }
    }
}

// const minNum = 50;
// const maxNum = 100;
// const answers = Math.floor(Math.random()*(maxNum-minNum+1)+minNum);


// let attempts = 0;
// let running = true;
// let guess ;

// while(running){
//     guess = Number(window.prompt(`Enter the Number between ${minNum} - ${maxNum}`));
//     if(isNaN(guess)){
//         window.alert(`Entered invalid values !!!`);
//     }
//     else if(guess < minNum || guess > maxNum) {
//         window.alert(`Enter the numbers between ${minNum} - ${maxNum} only`);
//     }
//     else{
//         attempts++;
//         if(guess < answers ){
//             window.alert(`Too Low ,Try again!!!`);
//         }
//         else if(guess > answers){
//             window.alert(`Too Hight,Try again !!!`)
//         }
//         else{
//             window.alert(`Correct ! The Answer is ${answer}.It took you ${attempts} attempts`);
//             running = false;
//         }

//     }
// }
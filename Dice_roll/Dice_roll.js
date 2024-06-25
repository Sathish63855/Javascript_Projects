// function rollDice(){
//     const numOfDice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images = [];

//     for(let i = 0; i < numOfDice ; i++){
//         const value = Math.floor(Math.random()*6)+1;
//         values.push(value);
//         images.push(`<img src = "/Projects/Assets/Dice_images/${value}.png" alt ="Dice ${value}">`)
//     }
//     diceResult.textContent = `dice : ${values.join(', ')}`;
//     diceImages.innerHTML = images.join('');
// }




// function rollDice(){
//     const numOfDice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     let values = [];
//     let images = [];

//     for(let i =0 ; i < numOfDice ; i++){
//         const value = Math.floor(Math.random()*6)+1;
//         values.push(value);
//         images.push(`<img src="/Projects/Assets/Dice_images/${value}.png" alt="${values}.image">`);
//      }
//      diceResult.textContent = `Dice : ${values.join(`, `)}`; 
//      diceImages.innerHTML = images.join(``); 

// }

// function rollDice(){
//     const numOfDice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     let values = [];
//     let images = [];

//     for(let i = 0 ; i < numOfDice ; i++){
//         const value = Math.floor(Math.random()*6)+1;
//         values.push(value);
//         images.push(`<img src="/Projects/Assets/Dice_images/${value}.png" alt="Dice ${value}.png">`);
//     }
//     diceResult.textContent = `Dice : ${ values.join(", ")}`;
//     diceImages.innerHTML = images.join(``); 

// }

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    let images = [];
    let values = [];

    for( i = 0 ; i < numOfDice ; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="/Projects/Assets/Dice_images/${value}.png" alt="Dice_${value}.png">`);
    }
    diceResult.textContent = `Dice : ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");
}
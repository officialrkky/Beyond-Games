let randomNumber = Math.floor((Math.random() * 20) + 1);
let output;

if (randomNumber == 1){
 let output = "It is decidedly so.";
}
else if (randomNumber == 2){
  let output = "As i see it, yes.";
}
else if (randomNumber == 3){
    let output = "Reply hazy, try again.";
}
else if (randomNumber == 4){
    let output = "Don't count on it.";    
}
else if (randomNumber == 5){
    let output = "It is decidedly so.";
}
else if (randomNumber == 6){
    let output = "Most likely";
}
else if (randomNumber == 7){
    let output = "Ask again later.";
}
else if (randomNumber == 8){
    let output = "My reply is no";
}
else if (randomNumber == 9){
    let output = "Without a doubt";
}
else if (randomNumber == 10){
  let output = "Outlook good.";
}
else if (randomNumber == 11){
    let output = "Better not tell you now.";
}
else if (randomNumber == 12){
    let output = "My sources say no.";   
}
else if (randomNumber == 13){
    let output = "Yes definitely.";
}
else if (randomNumber == 14){
    let output = "Yes.";
}
else if (randomNumber == 15){
    let output = "Cannot predict now.";
}
else if (randomNumber == 16){
    let output = "Outlook not so good.";
}
else if (randomNumber == 17){
    let output = "You may rely on it.";
}
else if (randomNumber == 18){
    let output = "Signs point to yes.";
}
else if (randomNumber == 19){
    let output = "Concentrate and ask again.";
}
else if (randomNumber == 20){
    let output = "Very doubtful.";
}
else {
    let output = "Error, please try again.";
}

document.getElementById("questionOutput").innerHTML = output;



   

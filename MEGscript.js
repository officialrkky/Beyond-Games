function getQuestionInput() {
    var questionInput = document.getElementById("questionInput").value; 
    alert(input);
}


var randomNumber = Math.floor(Math.random() * 20);
var outputNumber = "";

switch (randomNumber) {
  
  case 1:
    outputNumber += "It is certain.";
    break;
    
  case 2:
    outputNumber += "As i see it, yes.";
    break;
    
  case 3:
    outputNumber += "Reply hazy, try again.";
    break;
    
  case 4:
    outputNumber += "Don't count on it.";
    break;
    
  case 5:
    outputNumber += "It is decidedly so.";
    break;
    
  case 6:
    outputNumber += "Most likely.";
    break;
    
  case 7:
    outputNumber += "Ask again later.";
    break;
    
  case 8:
    outputNumber += "My reply is no.";
    break;
    
  case 9:
    outputNumber += "Without a doubt.";
    break;
    
  case 10:
    outputNumber += "Outlook good.";
    break;
    
  case 11:
    outputNumber += "Better not tell you now.";
    break;
    
  case 12:
    outputNumber += "My sources say no.";
    break;  
    
  case 13;
    outputNumber += "Yes definitely.";
    break;  
  
  case 14:
    outputNumber += "Yes.";
    break; 
  
  case 15:
    outputNumber += "Cannot predict now.";
    break;  
  
  case 16:
    outputNumber += "Outlook not so good.";
    break;  
  
  case 17:
    outputNumber += "You may rely on it.";
    break;  
  
  case 18:
    outputNumber += "Signs point to yes.";
    break;  
  
  case 19:
    outputNumber += "Concentrate and ask again.";
    break;  
  
  case 20:
    outputNumber += "Very doubtful.";
    break;  
    
  default:
    errorMessage += "Error, please try again"
    
}

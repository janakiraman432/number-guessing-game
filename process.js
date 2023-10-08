window.onload = function(){
    document.getElementById("userInput").focus();
}
enterPressed=document.getElementById("userInput");
enterPressed.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        startGame();
    }
});

function startGame(){
    let userData=document.getElementById("userInput").value;
    if(userData){
        let userNumber=+userData;
        if(Number.isNaN(userNumber)||userNumber>9||userNumber<0){
            wrongResult();
        }
        else{        
            document.getElementById("userInput").value="";    
            let randNumber=Math.floor(Math.random()*10);
            document.getElementById("server").alt=randNumber;
            dis();
            loadimg(userNumber,randNumber);
            if(randNumber==userNumber){
                win();                
            }
        }
    }
    else{
        wrongResult();
}
}

function wrongResult(){
        document.getElementById("userInput").value="";
        document.getElementById("divStart").style.display="none";
        document.getElementById("wrongResult").style.display="block";
        document.getElementById("errorMessage").innerHTML="<br><br><br>please enter a number between<br>0-9";
        document.getElementById("userInput").focus();
}

function loadimg(user,server){
    document.getElementById("user").innerHTML=user;
    document.getElementById("server").innerHTML=server;
    document.getElementById("userInput").focus();
}
function win(){
        document.getElementById("divStart").style.display="none";
        document.getElementById("wrongResult").style.display="block";
        document.getElementById("errorMessage").innerHTML="<br><br><br>your guess is right";
}
function dis(){
        document.getElementById("divStart").style.display="block";
        document.getElementById("wrongResult").style.display="none";
}
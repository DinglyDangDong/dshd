var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");
document.getElementById("p1").innerHTML = player1;
document.getElementById("p2").innerHTML = player2;

document.getElementById("turn").innerHTML = player1;
document.getElementById("answer").innerHTML = player2;

function send(){
    var word = document.getElementById("word").value;
    word = word.toLowerCase();
    console.log(word + "the orignal");
    var loc1 = 1;
    var loc2 = Math.floor(word.length/2);
    var loc3 = word.length - 1;

    var c1 = word.charAt(loc1);
    var c2 = word.charAt(loc2);
    var c3 = word.charAt(loc3);

    var removeC1 = word.replace(c1,"_");
    console.log(removeC1)
    var removeC2 = removeC1.replace(c2,"_");
    console.log(removeC2);
    var removeC3 = removeC2.replace(c3,"_");
    console.log(removeC3);

    var q = "<h3> what is this word " + removeC3 + "</h3><br>";
    var textAns = "<input placeholder='Answer here' id='answ'><br><br>";
    var btn = "<button onclick='check()' class='btn btn-primary'>Enter</button>";

    var x = q + textAns + btn;
    document.getElementById("output").innerHTML = x;
     
    //document.getElementById("word").innerHTML = "";
    document.getElementById("word").innerHTML = "";
console.log("i am done");
    
}
var answerTurn = "player1";
var questionTurn = "player2";

var score1 = 0;
var score2 = 0;
function check(){
    var theWord = document.getElementById("answ").value;
    theWord = theWord.toLowerCase();
    console.log(theWord + "this is the answer written by the user");
    
    
    if(theWord == word){
        if(answerTurn == "player1"){
            score1+=1;
            document.getElementById("score1").innerHTML = score1;
            
        }else {
            
            score2++;
            document.getElementById("score2").innerHTML = score2;
            
        }
    }
    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("turn").innerHTML = questionTurn;
    }else{
        questionTurn = "player1";
        document.getElementById("turn").innerHTML = questionTurn;
    }

    if(answerTurn == "player1"){
        answerTurn = "player2";
        document.getElementById("answer").innerHTML = answerTurn;
    }else{
        answerTurn = "player1";
        document.getElementById("answer").innerHTML = answerTurn;
    }
    document.getElementById("output").innerHTML = "";
}
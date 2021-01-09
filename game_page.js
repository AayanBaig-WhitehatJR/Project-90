var username1 = localStorage.getItem("Player Name")
var username2 = localStorage.getItem("Player Name 2")

var questionTurn = document.getElementById("questionTurn").innerHTML = "Question Turn: " + username1;
var answerTurn = document.getElementById("answerTurn").innerHTML = "Answer Turn: " + username2;
function send(){    
var n1 = document.getElementById("inputN1").value
var n2 = document.getElementById("inputN2").value 
answer = parseInt(n1) * parseInt(n2)
question_number = "<h4>" + n1 + "X" + n2 + "</h4>"
input_box = "<br>Answer: <input type = 'text' id = 'inputChkBox'>"
checkSumButton = "<br><br><button class = 'btn btn-info' onclick ='check()'>Check</button>"
row = question_number + input_box + checkSumButton
document.getElementById("output").innerHTML = row
document.getElementById("inputN1").value = ""
document.getElementById("inputN2").value = ""
}
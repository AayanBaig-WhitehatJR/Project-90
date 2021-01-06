var username = localStorage.getItem("Player Name")
var mode = localStorage.getItem("Mode:")
if(mode == "Easy"){
function displayQuestion(){
    document.getElementById("output").innerHTML = "20x1"
       answer = 20
}}
if(mode == "Medium"){
    function displayQuestion(){
        document.getElementById("output").innerHTML = "17/8"
        answer = 2.125
    }
}
if(mode == "Hard"){
    function displayQuestion(){
        document.getElementById("output").innerHTML = "2^5"
        answer = 32
    }
}
if(mode == "Hardcore"){
    function displayQuestion(){
        document.getElementById("output").innerHTML = "2^5x3/2"
        answer = 48
    }
}
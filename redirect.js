var username = localStorage.getItem("Player Name")
function redirect(){
    document.getElementById("note").innerHTML = "Dear " + username + ", <br><br><br> You are currently being redirected to the game page. Before we redirect you, please select which quiz level would you like.<br>"
    + " Choose between hard, medium and easy. Or you could go extremely hard and select hardcore."
}
function detectMode(){
    var mode = document.getElementById("inputMode").value
if(mode == "Easy"){
    localStorage.setItem("Mode: ", mode)
    console.log("Mode: " + mode)
    window.location = "game_page.html"
}
if(mode == "Medium"){
    localStorage.setItem("Mode:", mode)
    console.log("Mode: " + mode)
    window.location = "game_page.html"
}
if(mode == "Hard"){
    localStorage.setItem("Mode:", mode)
    console.log("Mode: " + mode)
    window.location = "game_page.html"
}
if(mode == "Hardcore"){
    localStorage.setItem("Mode:", mode)
    console.log("Mode: " + mode)
    window.location = "game_page.html"
}
if(mode == ""){
    window.alert("Please input a value, Either: 'Easy', 'Medium', 'Hard' or 'Hardcore'. ")
}
}
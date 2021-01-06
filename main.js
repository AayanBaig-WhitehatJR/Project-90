
function login(){
    player1 = document.getElementById("username_input").value
    localStorage.setItem("Player Name", player1)
    window.location = "redirect.html"
}
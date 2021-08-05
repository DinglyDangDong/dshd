function login(){
    var p1 = document.getElementById("firstName").value;
    var p2 = document.getElementById("secondName").value;
    localStorage.setItem("player1", p1);
    localStorage.setItem("player2", p2);
    window.location = "game_page.html";
}
function addUser(){
    un=document.getElementById("user_name").value;
    localStorage.setItem("user_key",un);
    window.location="kwitter_room.html";
}
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAfOvPRN9HQyAJliEvtXaeRnDWQ0zV8g50",
  authDomain: "kwitter-2bebf.firebaseapp.com",
  databaseURL: "https://kwitter-2bebf-default-rtdb.firebaseio.com",
  projectId: "kwitter-2bebf",
  storageBucket: "kwitter-2bebf.appspot.com",
  messagingSenderId: "824740318131",
  appId: "1:824740318131:web:aad616a9c6993a06a5d9c6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_key");
document.getElementById("user_name").innerHTML="Welcome "+user_name;

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Main_folder_names = childKey;
              //Start code
              console.log(Main_folder_names);
              row='<div class="room_name" id="'+Main_folder_names+'" onclick="redirect(this.id)">'+Main_folder_names+'</div><hr>';
              document.getElementById("output").innerHTML+=row;


              //End code
        });
  });
}
getData();
function redirect(div_id){
  console.log(div_id);
  localStorage.setItem("room_key",div_id);
  window.location="kwitter_message.html";
  
}
function addRoom(){
  rn=document.getElementById("room_name").value;
  firebase.database().ref("/").child(rn).update({
        purpose:"NEW ROOM ADDED"
  });
  localStorage.setItem("room_key",rn);
  window.location="kwitter_message.html";
}
function logout(){
  localStorage.removeItem("room_key");
  localStorage.removeItem("user_key");
  window.location="index.html";
  
}
var firebaseConfig = {
      apiKey: "AIzaSyC5VMBMGpZLhApyWOeZw1z10T_MYv47QK4",
      authDomain: "lets-chat-kwitter-1d124.firebaseapp.com",
      databaseURL: "https://lets-chat-kwitter-1d124-default-rtdb.firebaseio.com",
      projectId: "lets-chat-kwitter-1d124",
      storageBucket: "lets-chat-kwitter-1d124.appspot.com",
      messagingSenderId: "1030569534745",
      appId: "1:1030569534745:web:dbcbcc90ecfd7dac0f9188"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
      purpose : "adding room name"  
  });

  localStorage.setItem("room_name", Room_name);
  window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name -"+ Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}

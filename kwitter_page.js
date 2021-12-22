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
function send()
{
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name1:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();
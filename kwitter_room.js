var firebaseConfig = {
      apiKey: "AIzaSyC5VMBMGpZLhApyWOeZw1z10T_MYv47QK4",
      authDomain: "lets-chat-kwitter-1d124.firebaseapp.com",
      projectId: "lets-chat-kwitter-1d124",
      storageBucket: "lets-chat-kwitter-1d124.appspot.com",
      messagingSenderId: "1030569534745",
      appId: "1:1030569534745:web:dbcbcc90ecfd7dac0f9188"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

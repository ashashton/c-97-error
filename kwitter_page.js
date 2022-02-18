const firebaseConfig = {
    apiKey: "AIzaSyCC_j6Ar-AknTWGG5rkuhe3B1WQHpcGp98",
    authDomain: "online-chat-app-aka-kwitter.firebaseapp.com",
    databaseURL: "https://online-chat-app-aka-kwitter-default-rtdb.firebaseio.com",
    projectId: "online-chat-app-aka-kwitter",
    storageBucket: "online-chat-app-aka-kwitter.appspot.com",
    messagingSenderId: "638323326987",
    appId: "1:638323326987:web:432a72cd0b98f1d891870e",
    measurementId: "G-B90XNRZFY9"
  };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_Name");
room_name = localStorage.getItem("room_name");

function send() {
    message = document.getElementById("msgs").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:message,
        like:0
    });

    document.getElementById("msgs").value = " ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);

    name = message_data["name"];
    message = message_data["message"];
    like = message_data["like"];

    name_with_tag = "<h4>"+name+"<img class= 'user-tick' src = 'tick.png'> </h4>";
    message_with_tag = "<h4 class = 'message-heading'>"+message+"</h4>";
    like_with_btn ="<button class = 'btn btn-warning' id = "+firebase_message_id+"value = "+like+"onclick = 'update_like(this.id)'>";
    span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>LIKE: "+like+"</span></button><hr>";
    row = name_with_tag+message_with_tag+like_with_btn+span_with_tag;
    document.getElementById("output").innerHTML+=row;
//Start code

//End code
 } });  }); }
getData();

function update_like(message_id) {
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_like = Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes 
})
}

function logout() {
    localStorage.removeItem("user_Name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html")
}
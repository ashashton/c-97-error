
//ADD YOUR FIREBASE LINKS HERE
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

 Name = localStorage.getItem("user_Name");
 document.getElementById("user").innerHTML = "Welcome: "+Name+"!!!";

 function room() {
       room_name = document.getElementById("room_input").value;
       firebase.database().ref("/").child(room_name).update({
             purpose: "adding room name here"
       })

       localStorage.setItem("room_name",room_name);
       window.location = "kwitter_page.html";

 }
    
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class = 'room_name' id ="+Room_names+"onclick = 'redirectToName(this.id)'> #"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML = row;
                  //End code
            });
      });
}

getData();

function redirectToName(Name){
      console.log(Name);
      localStorage.setItem("room_name",Name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_Name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html")
  }
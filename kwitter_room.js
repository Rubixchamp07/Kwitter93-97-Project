var firebaseConfig = {
    apiKey: "AIzaSyBuCqUIp0HGgDcNqUAO1pHyyNU--gcC7Bc",
    authDomain: "kwitter-4de86.firebaseapp.com",
    databaseURL: "https://kwitter-4de86-default-rtdb.firebaseio.com",
    projectId: "kwitter-4de86",
    storageBucket: "kwitter-4de86.appspot.com",
    messagingSenderId: "779042895333",
    appId: "1:779042895333:web:25eaa0b531cbe86e1e6b0c",
    measurementId: "G-HQ4P2NT7C5"
  };
  firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
  }
  
  
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name -" + Room_names);
            row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML+=row;
        });
    });
}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
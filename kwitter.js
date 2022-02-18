function add_user() {
    name = document.getElementById("user_name").value;

    localStorage.setItem("user_Name", name);
    window.location = "kwitter_room.html";
}
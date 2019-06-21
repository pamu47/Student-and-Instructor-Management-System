
var database = firebase.database();
var make = document.getElementById("make").value;


function saveMake() {
    var temp = "Temp location";
    var make = document.getElementById("make").value;

    var data = {
        Location : temp
    }

    var updates = {};

    updates['/make/' +make] = data;
    firebase.database().ref().update(updates);
    alert('Make added successfully');
    reload_page();

}
function reload_page(){
    window.location.reload();

}
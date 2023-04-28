let d = new Date();
let dy = d.getDate();
let m = d.getMonth();
let y = d.getFullYear();
document.getElementById("date").innerHTML = (dy + "/" + m + "/" + y);
var i = 5;
var intervalid;   
intervalid = setInterval("time()", 1000);   
function time() {   
    if (i == 0) {   
        window.location=("/home");
        clearInterval(intervalid);   
    }   
    document.getElementById("time").innerHTML = i;   
    i--;   
}  
window.onload = time;
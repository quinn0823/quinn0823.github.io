var time = 5;
var t;
function writeTip(){           
    document.getElementById("text").innerHTML = "<a href='/' style=‘color:#ffffff’>Welcome to Quinn-Web!</a> ("+(count--)+")";   
    if(time == -1) {
        window.clearInterval(t);
        window.location = "/";               
    }
}
t = window.setInterval("writeTip()",1000);
var time = 5;
var t;
function jumpingpage(){           
    document.getElementById("text").innerHTML = "<a href='/' style=‘color:#ffffff’>Welcome to Quinn-Web!</a> ("+(time--)+")";   
    if(time == -1) {
        window.clearInterval(t);
        window.location = "/";               
    }
}
t = window.setInterval("jumpingpage()",1000);
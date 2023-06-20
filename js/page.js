var path = window.location.pathname
var title_en = document.title, title_cns = document.title;

if (path == "/index.html" || path == "/") {
    title_cns = "首页";
} else if (path == "/projects.html") {
    title_cns = "项目";
} else if (path == "/media/music.html") {
    title_cns = "音乐";
} else if (path == "/media/photos.html") {
    title_cns = "照片";
} else if (path == "/media/videos.html") {
    title_cns = "视频";
} else if (path == "/lab.html") {
    title_cns = "实验室";
} else if (path == "/about.html") {
    title_cns = "关于";
}

var header_en = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/index.html'>Home</a></li><li><a href='/projects.html'>Projects</a></li><li><a>Media</a><ul><li><a href='/media/music.html'>Music</a></li><li><a href='/media/photos.html'>Photos</a></li><li><a href='/media/videos.html'>Videos</a></li></ul></li><li><a href='/lab.html'>Lab</a></li><li class='about'><a href='/about.html'>About</a></li></ul></div><h1>" + title_en + "</h1><hr>";
var header_cns = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/index.html'>首页</a></li><li><a href='/projects.html'>项目</a></li><li><a>媒体</a><ul><li><a href='/media/music.html'>音乐</a></li><li><a href='/media/photos.html'>照片</a></li><li><a href='/media/videos.html'>视频</a></li></ul></li><li><a href='/lab.html'>实验室</a></li><li class='about'><a href='/about.html'>关于</a></li></ul></div><h1>" + title_cns + "</h1><hr>";


/*
<details><summary>Title</summary><hr /><ul><li>First</li><li>Secend</li><li>Third</li></ul></details>
*/
var now_ver = "12.2.2";
var next_ver = "None";

var next_cont_en = "<li>None</li>";
var next_cont_cns = "<li>None</li>";

var now_cont_en = "<li>🈴 All Chinese contents have been translated.</li>";
var now_cont_cns = "<li>🈴 所有中文内容已被翻译.</li>";

var news_en = "<span>Quinn-Web " + next_ver + "<sup class='nt'>NEXT</sup></span><details><summary>⏩ What will be updated?</summary><hr /><ul>" +next_cont_en + "</ul></details><hr /><span>Quinn-Web " + now_ver + "<sup class='nw'>NOW</sup></span><details><summary>✨ What have been update? </summary><hr /><ul>" + now_cont_en + "</ul></details>";
var news_cns = "<span>Quinn-Web " + next_ver + "<sup class='nt'>下一</sup></span><details><summary>⏩ 即将更新</summary><hr /><ul>" +next_cont_cns + "</ul></details><hr /><span>Quinn-Web " + now_ver + "<sup class='nw'>当前</sup></span><details><summary>✨ 现已更新</summary><hr /><ul></ul></details>";


var date_en = "Jun. 20, 2023";
var date_cns = "2023年6月20日";

var footer_en = "<hr><div id='footeri'>" + news_en + "<hr /><div class='sel'><select id='lang' onchange='langchange()'><option value='1' selected='selected'>United States - English</option><option value='2'>简体中文 (中国大陆) </option></select></div><div class='g_url'><span style='text-align: center; display:block; '>📅 Last Update: " + date_en + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu All Rights Reserved. | <a href='https://github.com/Quinn0823/quinn0823.github.io'  target='_blank'><i class='fa-brands fa-github'></i></a></span></div>";
var footer_cns = "<hr><div id='footeri'>" + news_cns + "<hr /><div class='sel'><select id='lang' onchange='langchange()'><option value='1'>United States - English</option><option value='2' selected='selected'>简体中文 (中国大陆) </option></select></div><div class='g_url'><span style='text-align: center; display:block; '>📅 最近更新：" + date_cns + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu 保留所有权利。 | <a href='https://github.com/Quinn0823/quinn0823.github.io'  target='_blank'><i class='fa-brands fa-github'></i></a></span></div>";

var ldate = 1;


function langset(set) {
    if (set == "for") {
        localStorage.lset = 1;
        sessionStorage.langdate = "";
    } else if (set == "vis") {
        localStorage.lset = 2;
        localStorage.langdate = "";
    } else if (set == "pag") {
        localStorage.lset = 3;
        localStorage.langdate = "";
        sessionStorage.langdate = "";
    }
}

function langdate() {
    if (localStorage.langdate == 2) { //Chinese
        document.title = title_cns + " | Quinn-Web";

        document.getElementById("header").innerHTML = header_cns;
        document.getElementById("footer").innerHTML = footer_cns;

        document.getElementById("en").style.display = "none";
        document.getElementById("cns").style.display = "inline";

        localStorage.langdate = 2;
    } else { //English
        document.title = title_en + " | Quinn-Web";

        document.getElementById("header").innerHTML = header_en;
        document.getElementById("footer").innerHTML = footer_en;

        document.getElementById("en").style.display = "inline";
        document.getElementById("cns").style.display = "none";

        localStorage.langdate = 1;
    }
}


function langchange() {
    if (document.getElementById("lang").value == "1") {
        localStorage.langdate = 1;
    } else if (document.getElementById("lang").value == "2") {
        localStorage.langdate = 2;
    }
    langdate();
}

langdate();
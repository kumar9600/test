$(document).ready(function(){
    $("#loginBtn").click(function(){
		window.location.href = "dashboard.html";
    });
});

function togglenav(){
    navSize = document.getElementById("mySidenav").style.width;
    if (navSize == "250px") {
        return close();
    }
    return open();
}
function open() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
		document.getElementById("ifr").style.marginLeft = "250px";
}
function close() {
         document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
		document.getElementById("ifr").style.marginLeft = "0";
}
$(document).ready(function(){
    $("#home").click(function(){
		/*$("#home").load(" index.html");*/
		document.getElementById("ifr").src = "index.html";
		
    });
});
$(document).ready(function(){
    $("#googleplay").click(function(){
		load_data();
		/*$("#googleplay").load(" index.html");*/
		/*document.getElementById("ifr").src = "https://www.quora.com/";*/
		
    });
});
$(document).ready(function(){
    $("#jetpack").click(function(){
		/*$("#jetpack").load(" index.html");*/
		document.getElementById("ifr").src = "https://developer.android.com/jetpack/";
		
    });
});
$(document).ready(function(){
    $("#blog").click(function(){
		/*$("#blog").load(" index.html");*/
		document.getElementById("ifr").src = "https://android-developers.googleblog.com/";
		
    });
});

function load_home() {
     document.getElementById("content").innerHTML='<object type="text/html" data="https://www.quora.com" ></object>';
}
function load_data(){
window.onload = function what(){
document.getElementById('hello').innerHTML = '<object type="text/html" data="https://www.quora.com" ></object>';
};
}
var dl = new Date("Dec 31, 2022 00:00:00").getTime();
var temp = setInterval(function() 
{
    var now = new Date().getTime();
    var t = dl - now;
    var d = Math.floor(t / (1000 * 60 * 60 * 24));
    var h = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").textContent = d ;
    document.getElementById("hr").textContent = h;
    document.getElementById("min").textContent = m; 
    document.getElementById("sec").textContent = s; 
    if (t < 0) 
    {
        document.getElementById('img1').setAttribute('src','https://cdn.dribbble.com/users/44134/screenshots/1369977/happy-new-year.gif');
        clearInterval(temp);
        document.getElementById("day").textContent ='0';
        document.getElementById("hr").textContent ='0';
        document.getElementById("min").textContent ='0' ; 
        document.getElementById("sec").textContent = '0'; 
    }
}, 1000);
var imgs = ['https://images.hdqwalls.com/download/8-bit-city-m2-1280x720.jpg', 'https://wallpapertops.com/walldb/original/5/6/4/688098.jpg', 'https://wallpaperaccess.com/full/1193446.jpg','https://wallpaperaccess.com/full/1622640.jpg']
var j = 0;
var main = document.getElementById('main');
main.style.backgroundImage = "url('https://i.postimg.cc/8CwnHnSt/Screenshot-172.png')";
var signs = document.querySelectorAll('.sign');
signs.forEach(function(arrow)
{
    arrow.addEventListener('click', function(e){
        if (e.target.id == "l")
        {
            j--;
            if (j < 0)
            {
                j = imgs.length -1;
            }
            main.style.backgroundImage = "url('"+imgs[j]+"')";
        } 
        else if (e.target.id == "r") 
        {
            j++;
            if (j >= imgs.length )
            {
                j = 0;
            }
            main.style.backgroundImage = "url('"+imgs[j]+"')";
        }
    })
});
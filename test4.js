var btns = document.getElementsByClassName('btn');
var dply = document.getElementsByClassName('txt')[0];
var str1 = "";
for(var i=0;i<btns.length;i++)
{
    if(i != 13 && i != 0)
    {
        btns[i].addEventListener('click',function()
        {
            str1 += this.getAttribute('value');
            dply.textContent = str1;
        })
    }
}
btns[13].addEventListener('click',function()
{
    if(str1 != "")
    {
        dply.textContent = ""+eval(str1);
    }
    else 
    {
        dply.textContent = "Please Input a Expression."
    }
})
btns[0].addEventListener('click',function()
{
    dply.textContent = "";
    str1 = "";
})
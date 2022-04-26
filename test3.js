var tabButtons = document.querySelectorAll('.tab');
for(var i=0;i<tabButtons.length;i++)
{
    tabButtons[i].addEventListener('click',function()
    {
        for(var j=0;j<tabButtons.length;j++)
        {
            tabButtons[j].setAttribute('id','none');
            document.getElementById(tabButtons[j].getAttribute('value')).setAttribute('class','hid');
        }
        this.setAttribute('id','active');
        document.getElementById(this.getAttribute('value')).setAttribute('class','none');
    });
}


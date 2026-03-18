function printusnumber()
{
    let number = "+1 "
    for(let i=0;i<10;i++)
    {
         number+= Math.floor(Math.random()*10)
        if (i === 2) number += "-";
    if (i === 5) number += "-";
    

    }
    console.log(number);
}
printusnumber();
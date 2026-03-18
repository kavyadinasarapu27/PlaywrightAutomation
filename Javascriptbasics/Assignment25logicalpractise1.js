for(let i =1;i<=50;i++)
{
    if((i%2==0) && (i%3==0))
    {
        console.log("TwoThree");
    }
    else if(i%2==0)
    {
        console.log("two");
    }
    else if(i%3==0)
    {
        console.log("three");
    }
    else
    {
        console.log(i);
    }
}
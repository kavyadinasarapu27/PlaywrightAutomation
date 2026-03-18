let num = 19;
if(num<=1)
{
    return false;
}
for(let i=2; i<=Math.sqrt(num);i++)
{
    if(num%i==0)
    {
        return false;
    }
}
   
        console.log("number is a prime number");
    

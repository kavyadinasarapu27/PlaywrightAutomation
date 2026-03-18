let numbers = [23,56,66,77,89,60,21,67];
let evencount = 0;
let oddcount = 0;
for(let i = 0;i<numbers.length;i++)
{
    if(numbers[i]%2==0)
    {
        evencount++
    }
    if(numbers[i]%2!=0)
    {
        oddcount++
    }
}
console.log("even count " + evencount);
console.log("odd count " + oddcount);

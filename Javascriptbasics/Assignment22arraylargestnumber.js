let numbers = [34,78,22,10,67,12];
let largest = numbers[0];
for(let i=1;i<numbers.length;i++)
{
    if(numbers[i]>largest)
    {
        largest=numbers[i]
    }
}
console.log(largest);
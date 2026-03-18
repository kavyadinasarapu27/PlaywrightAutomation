let number = 78987;
let originalnumber = number;
let reverse = 0;
while(number>0)
{
let digit = (number%10)
reverse = (reverse*10)+digit;
number = Math.floor(number/10);
}
console.log(reverse);
if(originalnumber===reverse)
{
    console.log("number is a palindrome");
}
else
{
    console.log("number is not a palindrome");
}
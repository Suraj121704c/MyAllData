function checkPalindromeNumber(number)
{
    var temp,
    temp = number;
    let new_number = reverse(number)
    palindrome(new_number,temp)
}

checkPalindromeNumber(123)

function reverse(number){
    var remainder,reversedNumber = 0
    while(number > 0)
    {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber*10 + remainder;
    }
    return reversedNumber;
}
function palindrome(new_number,temp){
    if(new_number == temp)
    {
        console.log("The given number is Palindrome");
    }
    else
    {
        console.log("The given number is not palindrome");
    }
}
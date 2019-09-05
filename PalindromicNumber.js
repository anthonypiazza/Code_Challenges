// Given a number, find the next smallest palindrome number larger than the number. 
// If the number is 125. the next palindrome is 131. 
const nine = 125;

console.log(nine.toString().split('').reverse().join(''))

function palindrome(n){
    if(n < 0){
        return 0
    }else{
        for(let i = n; i > 0; i++){
        const reversedNum = i.toString().split('').reverse().join('')
        console.log(reversedNum)
        if(i == reversedNum && i !== n){
            return i
        }
    }
    }
}


console.log(palindrome(-175))

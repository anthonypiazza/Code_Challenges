// Good morning! Complete the function so that it converts dash-delimited ("kebab" case) 
// & underscore-delimited ("snake" case) words into "camel" casing. The first word within 
// the output should be capitalized only if the original word was capitalized.

// toCamelCase("the-stealth-warrior")
// // returns "theStealthWarrior"
// toCamelCase("The_stealth_warrior")
// // returns "TheStealthWarrior"

function toCamelCase(stringArray){
    const camelArray = [];
    for(let i=0; i < stringArray.length; i++){
        if(stringArray[i] == '_'){
            stringArray[i + 1].toUpperCase()
            camelArray.push(stringArray[i + 1].toUpperCase())
        }else if(stringArray[i] == '-'){
            camelArray.push(stringArray[i + 1].toUpperCase())
        }else{
            camelArray.push(stringArray[i])
        }
        console.log(camelArray)
    }
} 

console.log(toCamelCase("The_stealth_warrior"))
// toCamelCase("the-stealth-warrior")



function sumArray(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
      total+=arr[i]
    }
    return total
}

console.log(sumArray([1, 2, 3]))



function sumAndProduct(sum, product) {
    const array = [];
    for(let i = 0; i < sum; i++){
      const x = sum - i
      if(i*x === product && !array[0] && !array[1]){
        array.push(i);
        array.push(x);
      }
      
    }
    if(array === []){
      return null
    }else{
      return array; 
    }
}

console.log(sumAndProduct(80, 700))
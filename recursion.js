function reverseString(string){
    // takes the last element every recursion and concats it to substring
    // return substring when input string has no element 
    let substring;
    if(string.length === 0){
        return string
    }
    substring = string[string.length - 1] + reverseString(string.slice(0, string.length -1 ))
    return substring
}

function palindromString(string){
    // if (reverseString(string) === string){
    //     return true 
    // }
    // return false 
    let output = true 
    if(string.length <= 1){
        return true 
    }
    if( string[0] != string[string.length - 1]){
        return false 
    } 
    
    let substring = string.slice(1, string.length - 1)
        
    return palindromString(substring)
}
function sumElementsOfArray(array, n){
    // sum all elements of an array when index is given 
    if( n > array.length){
        return 
    }
    if( n === 0){
        return 0
    }
    return sumElementsOfArray(array, n - 1) + array[n - 1]
}
function includesElement(array, elem){
    
    let len = array.length
    if(len === 0){
        return false
    }
    if(array[len - 1] === elem){
        return true 
    } 
    return includesElement(array.slice(0, len - 1), elem)
    
}
function largestElementOfAnArray(array){
    if(array.length === 1){
        return array[0]
    }
    let lastElement = array[array.length - 1]
    let newArray = array.slice(0, array.length -1)
    if (lastElement > largestElementOfAnArray(newArray)) {
        return lastElement 
    } else {
        return largestElementOfAnArray(newArray)
    }
}

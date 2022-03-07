function isNumber(value){
    return typeof(value) =="number";
}
console.log(isNumber(15))


function reverseArray (arr){
    let newArray = []; 
    for(let i = arr.length-1; i >= 0; i-- ){
        if(isNumber(arr[i])){
            newArray.push(arr[i]);
        }
    } 
    return newArray;
}
console.log(reverseArray ([4, 5,"hello", 25]));


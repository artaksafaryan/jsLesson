function chekArray(value) {
    if( Array.isArray(value)){
            return true
    }
    else{
            return false
    }
 }
     console.log(chekArray([10, 11, 12, 13, 45]));

function dividesIntoFive(arr){
 let newArray = [];
 if(chekArray(arr)){
 for(let i = 0; i < arr.length; i++){
   if(arr[i] % 5 === 0){
     newArray.push(arr[i])
   }
 }
}
return newArray
}

console.log(dividesIntoFive([10, 11, 12, 13, 45]));

function totalItemsFromArrays(firstArr, secondArr){
 let newArray = [];
if(chekArray(firstArr) && chekArray(secondArr)){
   for (let i = 0; i < firstArr.length;i++){
     for(let j = 0; j < secondArr.length;j++){
       if(firstArr[i]==secondArr[j]){
         newArray.push(firstArr[i]);
           break;
     }
   }      
 }
} 
return newArray;
}
console.log(totalItemsFromArrays([10, 11, 12, 13, 45],dividesIntoFive([10, 11, 12, 13, 45])));

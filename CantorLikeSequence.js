
function cantorLikeSequence(originalArray, levels = 3) {
let result = [...originalArray]; 

for (let level = 0 ;  level < levels; level++ { 

const newSequence = []; 

for ( let i = 0 ; i < result.length; i++) {
//insert interpolated values 
if (i < result.length - 1) {
const diminished = Math.floor(result[i] * 0.7 + result[i + 1] * 0.3);
                newSequence.push(diminished);



}



}

  result = newSequence;

}
  return result;


}

const myArray = [63, 61, 65, 70, 65, 68, 70, 80, 71, 73, 61, 59, 68, 70, 73, 63, 68, 66];

// Display the result
document.getElementById("output2").innerHTML = cantorLikeSequence(myArray).join(', ');

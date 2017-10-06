
function mergeSortedArray(a,b){
    var tempArray = [];
    while(a.length || b.length) {
        if(typeof a[0] == 'undefined') {
            tempArray.push(b[0]);
            b.splice(0,1);
        } else if(a[0] > b[0]){
            tempArray.push(b[0]);
            b.splice(0,1);
        } else {
            tempArray.push(a[0]);
            a.splice(0,1);
        }
    }
    return tempArray;
}
console.log(mergeSortedArray([1,2,5,6,7],[8,9,10]));

var s1 = "string"
var s2 ="strong";

function common() {
  var newStr = {};
  for(var i=0; i < s1.length; i++) {
    newStr[s1.charAt(i)] = 1;
  }
 
  var commonChars =[];
  for(var i=0; i < s2.length; i++) {
    if( newStr[s2.charAt(i)] == 1) {
      commonChars.push(s2.charAt(i)); 
    }
  }
  
  newStr = commonChars.join("");
  console.log(newStr);
}

common();
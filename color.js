function rgbaColor(r,g,b) {
   return function(a) {
       return `rgba(${r}, ${g}, ${b}, ${a})`
   }
}

let color1 = rgbaColor(177, 56, 50);
console.log(color1(0.05));
console.log(color1(0.25));

//Print Num from 0 to 256;
function Print(){
    for (var i=0; i<256; i++){
    console.log(i);
  }

}
Print();

//Print All Odd and Even Num;

function printEven() {
        for (var i = 0; i < 10; i++){
            if ((i % 2) == 0)
                console.log (i + ' ');
        }
    }

    function printOdd() {
        for (var i = 0; i < 10; i++){
            if ((i % 2) !== 0) 
                console.log(i + ' ');
        }
    }
printEven();
printOdd();


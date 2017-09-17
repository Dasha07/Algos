function intermediateSums(arr, pos) {
    var new_arr = [];
    var sum = 0;
    var new_pos = pos;

    for (var i = 0; i < arr.length; i++) {
        if (i == new_pos) {

            new_arr.push(sum);
            new_arr.push(arr[i]);
            new_pos = i + pos;
            sum = arr[i]; //reset sum to arr[i] value
        }
        else {
            new_arr.push(arr[i]);
            sum += arr[i];
            if(i==arr.length-1){
              new_arr.push(sum);
              console.log(sum);
              console.log(new_pos);
            }
        }
        console.log(new_arr);
    }
    return new_arr;
}

x = [0,1,2,3,4,5,6,7,8,9]

answer = [0,1,'1',2,3,'5',4,5,'9']

console.log(intermediateSums(x, 5))

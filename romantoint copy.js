function romanToInt(str) {
    var num = 0;
    dict = { 'I': 1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000 }
    for (var i = 0; i < str.length; i++) {
        var current = dict[str[i]];
        var next = dict[str[i + 1]];
        if (current < next) {
            num -= dict[str[i]]
        }
        else {
            num += dict[str[i]]
        }
    }
    return num;
}

x = 'XC'
console.log(romanToInt(x));
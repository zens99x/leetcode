var romanToInt = function(s) {
    let a = String(s);
    let num = romanNum(a.charAt(0));
    let length = a.length;
    for (let i = 1; i < length; i++) {
        let curr = romanNum(a.charAt(i));
        let next = romanNum(a.charAt(i - 1));
        if (curr <= next) {
            num += curr;
        } else {
            num = num - next*2 + curr;
        }
    }
    //
    function romanNum(c) {
        switch (c) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return -1;
        }
    }
    return num;
};

console.log(romanToInt("MCMXCIV"));
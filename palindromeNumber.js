var isPalindrome = function(x) {
    if (x === 1) return true;
    let number = x;
    let num = 0;
    while (x > 1) {
        // lấy số cuối
        let a = number % 10;
        //
        num = (num * 10) + a;
        // 
        number = number/10;
    }

};

console.log(isPalindrome(121));

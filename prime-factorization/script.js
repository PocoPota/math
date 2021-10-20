//素因数分解

var num = 1000; //素因数分解する元の数

for (var i = 2; i < i + 1; i++) {

    if (num % i == 0) {
        for (var n = 1; n < n + 1; n++) {
            if (num % i == 0) {
                console.log(i);
                var num = num / i;
            } else {
                break;
            }
        }
    }

    if (num == 1) {
        break;
    }
}

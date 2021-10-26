var num = 8; //累乗される数字
var expone = 4; //◯乗の部分の数字

var result = 1; //結果初期値
for(var i = 1; i <= expone; i++){
    var result = result * num;
}
console.log(result);
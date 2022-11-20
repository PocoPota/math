var num = 1000000; // 試行数を定義
var point = 0; // point定義
// グラフ描画のための配列を定義

for(var i = 1; i <= num; i++){
    var randomX = ((Math.random() * 2) - 1);
    var randomY = (Math.random() * 2) - 1;

    // 半径1の円の中にあるか計算
    var checkNum = Math.pow(randomX, 2) + Math.pow(randomY, 2);
    if(checkNum <= 1){
        var point = point + 1;
        
    }else{

    }
    // 一つ一つの座標を出力
    // console.log(i + "(" + randomX + ", " + randomY + ")");
}
var result = (point / num) * 4;
console.log(result);

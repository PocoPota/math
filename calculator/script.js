operatorCheck = false;
firstCheck = true;
//クリアボタンが押された場合の動作
$('.btnClear').click(function () {
    $('#resultNumDisplay').html('0');
    $('#operatorDisplay').html('');
    $('#operatorDisplay').css('visibility', 'hidden');
    operatorCheck = false;
    firstCheck = true;
})
//演算子ボタンが押された場合の動作
$('.btnOperator').click(function () {
    if (firstCheck == true) {
        operator = $(this).val();
        $('#operatorDisplay').css('visibility', 'visible');
        $('#operatorDisplay').html(operator);
        firstNum = $('#resultNumDisplay').html();
    } else {
        firstNum = Number(firstNum);
        nowNum = $('#resultNumDisplay').html();
        nowNum = Number(nowNum);
        switch (operator) {
            case '÷':
                firstNum = firstNum / nowNum;
                break;
            case '×':
                firstNum = firstNum * nowNum;
                break;
            case '-':
                firstNum = firstNum - nowNum;
                break;
            case '+':
                firstNum = firstNum + nowNum;
                break;
            case '%':
                firstNum = (firstNum / 100) * nowNum;
                break;
        }
        $('#resultNumDisplay').html(firstNum);
        operator = $(this).val();
        $('#operatorDisplay').css('visibility', 'visible');
        $('#operatorDisplay').html(operator);
    }
    operatorCheck = true;
    firstCheck = false;
})
//数字ボタンが押された場合の動作
$('.btnNum').click(function () {
    if (operatorCheck == false) {
        var originallyNum = $('#resultNumDisplay').html();
        var btnNum = $(this).val();
        if (originallyNum == '0') {
            $('#resultNumDisplay').html(btnNum);
        } else {
            $('#resultNumDisplay').html(originallyNum + btnNum);
        }
    } else {
        var btnNum = $(this).val();
        $('#resultNumDisplay').html(btnNum);
    }
    operatorCheck = false;
})
//小数点ボタンが押された場合の動作
$('.btnPoint').click(function () {
    var originallyNum = $('#resultNumDisplay').html();
    var btnNum = $(this).val();
    $('#resultNumDisplay').html(originallyNum + btnNum);
})
//イコールボタンが押された場合の動作
$('.btnOutput').click(function () {
    if (operatorCheck == false) {
        firstNum = Number(firstNum);
        nowNum = $('#resultNumDisplay').html();
        nowNum = Number(nowNum);
        switch (operator) {
            case '÷':
                var result = firstNum / nowNum;
                break;
            case '×':
                var result = firstNum * nowNum;
                break;
            case '-':
                var result = firstNum - nowNum;
                break;
            case '+':
                var result = firstNum + nowNum;
                break;
            case '%':
                var result = (firstNum / 100) * nowNum;
                break;
        }
        $('#resultNumDisplay').html(result);
        $('#operatorDisplay').html('');
        $('#operatorDisplay').css('visibility', 'hidden');
    } else {
        nowNum = $('#resultNumDisplay').html();
        $('#resultNumDisplay').html(nowNum);
        $('#operatorDisplay').html('');
        $('#operatorDisplay').css('visibility', 'hidden');
    }
})
//+/-ボタンが押された場合の動作
$('.btnReverseOperator').click(function () {
    var changeNum = $('#resultNumDisplay').html();
    $('#resultNumDisplay').html(-(changeNum));
})

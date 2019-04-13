// 函数 可以封装一段特定功能的代码，然后通过函数名重复调用此段代码
function getSum() {
    // 函数体
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}
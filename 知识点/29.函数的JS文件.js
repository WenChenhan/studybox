//一、无参无返回值：打印出5行 每行10个*
//函数功能：打印出5行 每行10个*
//形参： 无
//返回值： 无
function printStar() {
    //定义函数
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 10; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}

//二、有参无返回值：打印出n行 每行m个特定的字符  调用时必须传入实参
//函数功能：打印出n行 每行m个[char]
//形参： n：行数   number
//      m：每行的个数   number
//      char：输出的图案   string
//返回值： 无
function printStarnm(n, m, char) {
    //定义函数
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            document.write(char);
        }
        document.write("<br>");
    }
}

//三、无参有返回值：求1-100的和
//函数功能：求1-100的和
//形参：无
//返回值： 和  number
function sum1_100() {
    var sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
}

//四、有参有返回值：
//函数功能：判断一个年份是否为闰年
//形参：y 用户输入的年份 number
//返回值： boolean 
function runnian(y) {
    return y % 4 == 0 && y % 100 != 0 || y % 400 == 0
}






//----------------------练习-------------------------
//1.输出九九乘法表
//函数功能：打印九九乘法表
//形参： 无
//返回值： 无
function jiujiu() {
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(`${j}*${i}=${i * j}&nbsp&nbsp&nbsp&nbsp`);
        }
        document.write("<br>");
        document.write("<br>");
    }
}

//2.输出n行*，每行2n-1个
//函数功能：输出n行*，每行2n-1个
//形参： n 行数  number
//返回值： 无
function xinxin(n) {
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= 2 * i - 1; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}

//函数功能：冒泡排序
//形参： arr 数组  Array元素为number
//返回值： 无
function maopao(arr) {
    document.write('原数组：' + arr + '<br>');
    for (let i = 0; i < arr.length - 1; i++) { //let声明变量为块级作用域
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //解构赋值交换位置
            }
        }
    }
    return arr.join(' < ');
}


//函数功能：判断用户输入的日期是否有效
//形参：y 年份  m 月份 d 日
//返回值 boolean
function isVoildYear(y, m, d) {
    y = parseInt(y);
    m = parseInt(m);
    d = parseInt(d);
    if (isNaN(y) || isNaN(m) || isNaN(d)) {
        return false;
    }
    var maxDay = (m == 2 ? ((y % 4 == 0 && y % 100 != 0 || y % 400 == 0) ? 29 : 28) : (m == 4 || m == 6 || m == 9 || m == 11 ? 30 : 31));
    return !(y < 0 || m < 1 || m > 12 || d < 1 || d > maxDay);
}
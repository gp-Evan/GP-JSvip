# JavaScript 基础

## 第二课

> 学习目标：
>
> 1. JavaScript中的操作符
> 2. JavaScript流程控制

### 表达式和语句

#### 表达式

> 一个表达式可以产生一个值，有可能是运算、函数调用、字面量等等。表达式可以放在任何需要的地方。
>
> 比如： 5+6 

#### 语句

> 语句可以理解为一个行为，循环语句和判断语句就是最经典的语句。一个程序是由很多个语句组成。一条语句，一般以;结束。

### 操作符

操作符，又叫做运算符 operator

表达式 一般是由 **操作符** 和 **操作数**组成 (常见的表达式)

#### 算术运算符

数学里边的加减乘除

```javascript	
// + - * / %
// 跟数学中的是一样的
var x = 5;
var y = 10;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// 两个比较特殊的
console.log(x/0); // Infinity
console.log(x % 0 ); // NaN
```



#### 一元运算符

> 只带一个操作数的 运算符 叫  一元运算符
>
> 能带两个 操作数的 运算符  叫 二元运算符，所以前面所学的 都是 二元运算符。

```javascript
// ++ 自身+1
// -- 自身-1
var num = 5;
console.log(++num);  // 6
console.log(--num);  // 5
```

>  `++num` 首先它是一个表达式，既然是表达式，就有  返回值。
>
>  前置和后置的区别就在于这个返回值

- 前置

> 先让操作数 自身+1（-1），然后再返回运算后的结果。

```javascript
var num  = 5;
console.log(++num);// 6;
console.log(num); // 6
var num1 = 7;
console.log(num + ++num1);//14   6+8
console.log(num1);// 8

console.log(--num1);// 7
```

- 后置

> 先返回操作数的结果，然后再对 操作数 自身+1(-1)

```javascript
var num = 5;
console.log(num++);// 5
console.log(num);//6
var num1  = 7;
console.log(num + num1++); // 6+7 13
console.log(num1);// 8
```

- 巩固练习

```javascript
var a = 1;var b= ++a + ++a;console.log(b);
var a = 1;var b= a++ + ++a;console.log(b);
var a = 1;var b = a++ + a++;console.log(b);
var a = 1;var b = ++a + a++;console.log(b);
```



#### 逻辑运算符

> 逻辑运算符又叫 **布尔运算符**。

- &&(逻辑与)： 两个操作数同时为`true`，结果为`true`，否则为`false`。
- ||(逻辑或)：两个操作数有一个为`true`，结果为`true`，否则为`false`。
- !(逻辑非)：取反

```javascript
// 逻辑运算符  与&&    或||    非!
var a = true;
var b = false;
console.log(a && b);
console.log(a || b);
console.log(!a)
```

> 什么时候用到逻辑运算符？
>
> 将来 需要判断 或者 循环的时候，即将使用大量的逻辑运算。

##### 布尔类型的隐式转换

```javascript
var num = 123;
console.log(Boolean(num));// 强制转换

// 隐式转换
// 转换成 false的5中情况  0,'',NaN,undefined,null
if(num){
    console.log('转换成功');
}
var msg;
if(msg){
    console.log('true');
}else{
    console.log('false');
}

// 利用取非进行隐式转换
var str = '哈哈';
var isOk = !!str; //  true，取反 为 false，再取反
console.log(isOk);
```



#### 关系运算符

> 关系运算符又叫 **比较运算符**
>
> 用于比较 两个数的大小 或者 异同  返回值 是*布尔类型*
>
>  \> 、<、 >=、<=  、== 、!=  、=== 、!==

```javascript
var a = 10;
var b = 5;
var c = '10';

// 比较两个数的大小，返回布尔值
console.log(a>b);
console.log(a<b);

// 比较相等的时候，着重讲解
// == !=
console.log(a==b);
console.log(a!=b);
// 判断变量的值是否相等
console.log(a==c);
// === !==
console.log(a===b);
console.log(a!==b);
// 只有 两者的 值 和 数据类型 都相同的时候，才返回true
console.log(a===c);
```

#### 赋值运算符

> =  、+=  、-=  、 *=  、/=  、%= 

```javascript
var num = 5;
var num1 = num * 5; 
// 简化语法
num1++; // 自增1
num1 = num1 + 5; // 自增5
// 简化语法
num1 += 5; //  等价于上面
// 同理
num1 -= 5;
num1 *= 5;
num1 /= 5;
num1 %= 5;
```

#### 运算符的优先级

> 运算符的优先级
>
> 1. () 优先级最高
> 2. 一元运算符 ++     --    !
> 3. 算术运算符   先  *  /    %   后  +    -
> 4. 关系运算符    >    >=    <    <= 
> 5. 关系运算符    ==    !=    ===    !==
> 6. 逻辑运算符    先 &&   后 ||
> 7. 赋值运算符 

```javascript
// 练习1
4 >= 6 || '人' != '阿凡达' && !(12 * 2 == 144) && true;
(4 >= 6) || ('人' != '阿凡达') && (!(12 * 2 == 144)) && true;
(4 >= 6) || ('人' != '阿凡达') && (!(24 == 144)) && true;
(4 >= 6) || ('人' != '阿凡达') && (!false) && true;
(4 >= 6) || ('人' != '阿凡达') && true && true;
false || true && true && true;
false || true;
true;

// 练习2
var num = 10;
5 == num / 2 && (2 + 2 * num).toString() === '22';
(5 == num / 2) && ((2 + 2 * num).toString() === '22');
(5 == 5) && ((2 + 20).toString() === '22');
true && (22.toString() === '22');
true && ('22' === '22');
true && true;
true;
```



### 流程控制

> 流程控制 是 编程语言 与 其他语言区分的一个标识，
>
> 流程控制指的是，我们写的代码是如何去执行的。

#### 顺序结构

> 代码从上到下依次执行，就是顺序结构。
>
> **程序默认就是从上倒下顺序执行的。**

```flow
s=>start: 开始
op1=>operation: 语句1
op2=>operation: 语句2
e=>end: 结束
s->op1->op2->e
```

#### 分支结构

> 根据不同的情况，执行不同的代码
>
> 又叫*选择结构*

```flow
s=>start: 开始
e=>end: 结束
c=>condition: 条件
op1=>operation: 语句1
op2=>operation: 语句2

s->c()
c(yes)->op1->e
c(no)->op2->e
```

##### if语句

语法：

```javascript
if(/* 条件表达式 */){
	// 执行语句
}


if(/* 条件表达式 */){
	// 成立执行语句
 }else{
 	// 否则执行语句   
}


if(/* 条件表达式1 */){
	// 成立执行语句
}else if(/* 条件表达式2 */){
 	// 成立执行语句   
}else if(/* 条件表达式3 */){
	// 成立执行语句
}else{
	// 否则执行语句    
}
```

案例：

> 1. 求两个数的最大数
> 2. 判断一个数是奇数还是偶数
> 3. 分数转换，把百分制转换成ABCDE   A(90-100)   B(80-90)  C(70-80)  D(60-70)  E(<60)

##### 三元运算符

> 分支结构的另类写法
>
> 带有 三个 操作数的运算符 
>
> 表达式1? 表达式2 : 表达式3;
>
> 表达式1： 布尔类型的表达式，它总会返回一个布尔类型的值
>
> 当表达式1成立 ，则返回表达式2的值，当表达式1不成立，则返回表达式3的值；
>
> 是对 if else语法的一种简化

```javascript
var num1 = 3;
var num2 = 6;
// 表达式1 ? 表达式2 : 表达式3
console.log(num1>num2?num1:num2);


var age = 17;
console.log(age>=18 ? '成年' : '未成年');
```

##### switch语句

> 也常用语条件判断，用于多个分支。
>
> 只能做 值相等判断，而if可以做某个范围判断

```javascript
switch(expression){
    case 常量1:
        语句;
        break;
    case 常量2:
        语句;
        break;
    case 常量3:
        语句;
        break;
    ...
    case 常量n:
        语句;
        break;
    default:
        语句;
}
```

#### 循环结构

> 重复做一件事。
>
> 在JavaScript中，循环语句有三种，while，do...while，for。

```flow
s=>start: 开始
c=>condition: 条件
op1=>operation: 语句1
op2=>operation: 语句2
e=>end: 结束

s->c()
c(yes)->op1->c()
c(no)->op2->e
```

##### while语句

基本语法：

```javascript
// 当循环条件为true的时候，执行循环体。
// 当循环条件为false的时候，结束循环。

while(循环条件){
    // 循环体
}
```

案例：

```javascript
// 当循环条件永远是 true的时候，那么就会出现死循环
var i = 1;
while(i<=100){
    // 循环体
    console.log(i);
    i++;
}

// 计算1-100之间的累加和
var i = 1;
var sum = 0;
while(i <= 100){
    sum += i;
    i++;
}
console.log(sum);
```

##### do-while语句

> do...while和while循环非常像，二者经常可以相互替换，但是do...while的特点是，
>
> 不管条件成立与不成立，都会先执行一次循环体。

```flow
s=>start: 开始
c=>condition: 条件
op1=>operation: 语句1
op2=>operation: 语句2
e=>end: 结束
s->op1->c()->e
c(yes)->op1
c(no)->op2->e

```



```javascript
do{
    // 循环体
}while(循环条件)
```

##### for循环

> while 和do...while一般用于解决无法确认次数的循环。for循环一般在循环次数确定的时候比较方便

```javascript
// for循环的表达式之间用;隔开，千万不能写成,
for(初始化表达式1;条件表达式2;自增表达式3){
    // 循环体 4
}
// 执行顺序
// 1243->243->243直到循环条件变成false
```

> 1. 初始化表达式
> 2. 判断表达式
> 3. 自增表达式
> 4. 循环体

```flow
s=>start: 循环开始
op1=>operation: 表达式1
c=>condition: 表达式2
op2=>operation: 循环体
op3=>operation: 表达式3
e=>end: 循环结束

s->op1->c()
c(yes)->op2->op3->c()
c(no)->e
```



##### continue和break

> break：立即跳出整个循环，即结束循环。开始执行后边的内容（直接跳到大括号后面）
>
> continue：立即跳出当前循环，继续下一次循环（跳转到i++的地方）

```javascript
// 求 50-200之间 第一个能被7整除的数
for(var i = 50; i<=200; i++ ){
    if(i % 7 === 0){
        console.log(i);
        break;
    }
}


// 求1-100之间的累加值，但是要求 跳过能所有 个位 为 3的数。
var sum  = 0;
for(var i = 0; i<100; i++){
    if( i % 10 === 3){
        console.log(i);
        continue;
    }
    sum += i;
}
console.log(sum);
```

##### 调试

> debug，调试的目的是确定错误的原因和位置，并解决错误。

- 程序中的错误

  - 语法错误

    浏览器中的console会报错，能快速定位到某个文件某一行

  - 逻辑错误

    程序执行的结果，跟预期的结果不一致，需要自己去分析那一行写错了。

- 简单调试方式
  - alert()
  - console.log()

- 断点调试

  > 断点调试是指自己在程序中某一行设置一个断点，调试的时候，程序运行到这一步就会停住，然后可以一步一步往下调试。调试过程中，可以看到各个变量当前的值，出错的话，调试到出错的代码行就会显示错误，停止运行。

### 作业

> 1. 判断一个人的年龄 是否满18岁  【if语句，三元表达式】
>
> 2. 判断一个年份 是 闰年还是平年（闰年：能被4整除，但不能被100整除的年份，或者能被400整除的年份）【if】
>
> 3. 打印100以内7的倍数【while、for】
>
> 4. 打印100以内 所有的偶数【while、for】
>
> 5. 打印100以内所有的奇数和【while、for】
>
> 6. 使用do...while，输入询问“我爱你，嫁给我吧？”，选择“你喜欢我吗？(y/n)”
>
>    如果输入y则打印，“我们形影不离”，如果输入n，继续询问。
>
> 7. 打印1-100之间所有数的平均值
>
> 8. 在控制台 输出 一个 10*10 的  * 形状
>
>    ![10*10正方形](data:image/png;base64,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)
>
> 9. 在控制台输出一个  三角
>
>    ![三角](data:image/png;base64,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)
>
> 10. 在控制台 输出 99乘法表
>
>     ![](data:image/png;base64,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)
>
> 11. 本金10000元存入银行，年利率是 千分之三，每过1年，将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？
>
> 12. 有一个人想知道，一年之内一对兔子能繁殖多少对。于是就筑了一道围墙，把一对兔子关在里边。已知一对兔子每月可以生一对小兔子，而一对小兔子出生后第三个月开始每月生一对小兔子。假如1年内没有发生死亡现象，那么1年（12个月）时间，最后剩多少对兔子。

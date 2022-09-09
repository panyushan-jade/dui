/* eslint-disable @typescript-eslint/no-unused-vars */

/*************************** 手写call ***************************/
Function.prototype.myCall = function (context, ...args) {
  // 判断是否是undefined和null
  if (typeof context === "undefined" || context === null) {
    context = window;
  }
  let fnSymbol = Symbol();
  context[fnSymbol] = this;
  console.log("1111111", this);
  console.log("2222222", context);
  console.log("3333333", context[fnSymbol]);
  let fn = context[fnSymbol](...args);
  console.log("4444444", fn);
  delete context[fnSymbol];
  return fn;
};

// const a = [].shift.myCall([1,2,3])
// console.log('aaa===>',a);
const a = {
  name: "pan",
};
const b = {
  say: () => {
    console.log("hihihi", this.name);
  },
};
b.say.myCall(a);

/*************************** 编译原理 状态机（词法分析） ***************************/

let tokens = [];
let NUMBERS = /[0-9]/; //匹配数字
let currentToken;
const Numeric = "Numeric"; // 代表数字
const Punctuator = "Punctuator"; // 标点符号
function emit(token) {
  currentToken = { type: "", value: "" };
  tokens.push(token);
}

function start(char) {
  // start 表示开始状态函数,接受一个字符,返回下一个状态函数
  if (NUMBERS.test(char)) {
    // 如果这个char是一个数字的话
    currentToken = { type: Numeric, value: "" };
  }
  // 进入新的状态,什么状态？就是收集或者是捕获number数字的状态
  return number(char);
}

function number(char) {
  if (NUMBERS.test(char)) {
    // 如果是数字
    currentToken.value += char;
    return number;
  } else if (char === "+" || char === "-") {
    emit(currentToken);
    emit({ type: Punctuator, value: char });
    currentToken = { type: Numeric, value: "" }; ///////////////////////
    return number;
  }
}

function tokenizer(input) {
  let state = start;
  for (let char of input) {
    console.log("char===>", char);
    state = state(char);
  }
  if (currentToken.value.length > 0) {
    emit(currentToken);
  }
}
tokenizer("10+20");
console.log(tokens);
/* 
    [
        { type: 'Numeric', value: '10' },
        { type: 'Punctuator', value: '+' },
        { type: 'Numeric', value: '20' }
    ]
*/

for (let char of '<h1 id="title">hello</h1>') {
  console.log("char===>", char);
}

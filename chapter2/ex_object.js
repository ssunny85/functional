// 다양한 key, value 정의

const obj = { a: 1, 'b': 2 };
obj.c = 3;
obj['d'] = 4;
const e = 'e';
obj[e] = 5;
function f() { return 'f'; }
obj[f()] = 6;
console.log('obj: ', obj);

const obj2 = { 'a a a': 1 };
obj2['b b b'] = 2;
console.log('obj2: ', obj2);

const obj3 = { 'margin-top': 5 };
obj3['padding-bottom'] = 6;
console.log('obj3: ', obj3);

const obj4 = { 1: 10 };
obj4[2] = 20;
console.log('obj4: ', obj4);

// const obj5 = { (true ? 'a' : 'b'): 1 }; // 오류

const obj5 = { [true ? 'a' : 'b']: 2 };
console.log('obj5: ', obj5);

const obj6 = {};
obj6[true ? 'a' : 'b'] = 1;
console.log('obj6: ', obj6);


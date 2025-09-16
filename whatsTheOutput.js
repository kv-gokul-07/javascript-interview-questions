const a = {};
const b = { key: "b" }
const c = { key: "v" }

a[b] = 123;
a[c] = 456;

console.log(a[b]);

//Output will be { '[object Object]': 456 } 456 , due to in b variable object reference number is stored
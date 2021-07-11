const is_array = (a) => {
  if (Array.isArray(a)) {
    console.log('Yes it it an Array');
  } else {
    console.log('Not an Array');
  }
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

const array_Clone = (a) => {
  let b = [...a];
  // b.push(3)
  console.log('Cloned array' + b);
  console.log('Original array' + a);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

const first = (a, n = 0) => {
  if (n == 0 && a.length > 0) {
    return a[n];
  }
  if (n < 0 || a.length == 0) {
    return [];
  }
  let x = a.slice(0, n > a.length ? a.length : n);
  return x;
};

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));



myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));
console.log(myColor.join("+"));


var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let m=0,e=0,c=0;
for(let i of arr1){
    c=0;
    for(let j of arr1){
        if(i==j){
            c++;
        }
    }
    if(m<c){
        m=c;
        e=i;
    }
}
console.log(e+" ( "+m+" times )");
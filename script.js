function calculateMinCost() {
//your code here
let lengths = document.getElementById('rope-lengths');
let values = lengths.value.split(', ').map(Number);
values.sort((a, b) => a - b);
let ans = 0;
while(values.length>2){
let val1 = values[0];
let val2 = values[1];
values.splice(0,2);
ans+=val1+val2;
values.push(val1+val2);
values.sort((a, b) => a - b);
}
ans+=values[0]+values[1];
let result = document.getElementById('result');
result.textContent = ans;
}
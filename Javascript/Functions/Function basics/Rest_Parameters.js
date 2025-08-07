//rest parameters collects all remaining arguments
//into a real array.
function arry(...nums){
    console.log(nums);
}
arry(1,2,3);

function multiplyALL(multiplier,...nums){
    return nums.map(n => n * multiplier);
}
const a = multiplyALL(3,5,6)
console.log(a)


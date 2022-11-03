// Array.prototype.forEach2 = function(fn, fn2) {
//     let sum = 0
//     for(let i = 0; i < this.length;i++)
//     {
//         console.log(fn)
//         // fn(this[i], i)
//         // sum += this[i]
//         // console.log(this[i])
//     }

//     console.log(fn2)
// }

// array = [1, 2, 3, 4]

// // array.forEach2.call(array, (i, d) => {console.log(i, ",", d)}, (s) => console.log(s))
// // array.forEach2.call(array)
// array.forEach2.call(array, 10, 100)

/*
let j = 0
let u = 0
for(j; j < 5; j++)
{
    console.log("be", j) 0
    u += j
    console.log("la", j)
}
*/

var i = 0
console.log(i++)    // 0 ? 先返回再加,临时变量tmp = i = 0 , tmp = i = 1
console.log(i)      // 1
console.log(++i)    //  2  ? 先加再返回

array = [1, 2, 3, 5]

for(let ii in array)
{
    console.log(ii, array[ii])
}

// for in 遍历数组的话是遍历索引
// for of 遍历数组的话是遍历值
for(let ii of array)
{
    console.log(ii)
}
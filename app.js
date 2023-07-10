// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//         return num % 2 === 0
//     });
// }

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0);


// function findMin(...nums){
//     return Math.min(...nums);
// }

const findMin = (...nums) => Math.min(...nums);

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1




const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}


const doubleAndReturnArgs = (arr, num1, num2) => ([...arr, num1*2, num2*2])

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]




/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//     const random = Math.floor(Math.random()*(...items).length);
//     return [...items].splice(random, 1);
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const removeRandom = items => [...items].splice(Math.floor(Math.random()*items.length), 1)

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {
//     return [...array1, ...array2]
// }

const extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {
//     return {...obj, [key]: val}
// }

const addKeyVal = (obj, key, val) => ({...obj, [key]: val})

/** Return a new object with a key removed. */
// function removeKey(obj, key) {
//     const newObj={...obj};
//     delete newObj[key];
//     return newObj;
// }

const removeKey = (obj, key) => {
    const newObj={...obj};
    delete newObj[key];
    return newObj;
}

removeKey({
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  }, 'key2');

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});

combine({
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  }, {
    key4: 'value4',
    key5: 'value5',
    key6: 'value6'
  })

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    const newObj={...obj};
    newObj[key]=val;
    return newObj;
}
update({
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  }, 'key2', 'val')
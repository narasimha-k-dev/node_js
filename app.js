const _ = require("lodash");
const arr = [1, [2, [3, [4, 1]]]];

const newarr = _.flattenDeep(arr);
console.log(newarr);

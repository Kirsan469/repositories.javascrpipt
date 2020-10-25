// Number
const  num = 42
const float = 42.42 //float
const pow = 10e3

console.log('Max_Safe_Integer', Number.MAX_SAFE_INTEGER)
console.log('Math.pow.53', Math.pow(2,53) - 1)
console.log('Min_Sage_Integer', Number.MIN_SAFE_INTEGER)
console.log('Max_Value',Number.MAX_VALUE)
console.log('Min_Value',Number.MIN_VALUE)
console.log('POSITIVE_INFINITY',Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY',Number.NEGATIVE_INFINITY)
console.log('2 / 0', 2 / 0)
console.log(Number.NaN) // Not A Number
console.log(typeof NaN)
const weird = 2 / undefined
console.log(Number.isNaN(weird))
console.log(Number.isNaN('42'))
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(42))

const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)

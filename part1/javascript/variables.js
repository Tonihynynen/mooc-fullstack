const x = 1
let y = 5

console.log(x, y)
y += 10
console.log(x, y)
y = "text"
console.log(x, y)


const t = [1,2,3]

console.log(t.length)
console.log(t[0])
t.push(4)
console.log(t)
t.forEach(value =>{
    console.log(value)
})

const t2 = t.concat(5)
console.log(t2)

const m2 = t.map(value => '<li>' + value + '<li>')
console.log(m2)

const t3 = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t3 
console.log(first, second)
console.log(rest)
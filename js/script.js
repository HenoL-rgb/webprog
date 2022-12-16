function first(str1, str2) {

    let firstSet = new Set(str1)
    let secondSet = new Set(str2)

    return Array.from(firstSet).sort().join('') === Array.from(secondSet).sort().join('')
    
}

//console.log(first('agygfw', 'fyagw'))

function second(arr) {
    let i = 0;
    let timer = setInterval(() => {
        console.log(arr[i])
        i++;
        if(i == arr.length)
            clearInterval(timer)
    }, 3000)
}

//second([1,2,3])
function third(...args) {
    let set = new Set([...args])
    return Array.from(set)
}

//console.log(third(1,6,3,2,4,3,1,5,6,'43','g','as','g',5));

function fourth(a) {
    for(let i = 0; i < a.length; i++){
        for(let j = i + 1; j < a.length; j++){
            if(a[i] % 2 == 0 && a[j] % 2 == 0){
                if(a[j] > a[i])
                    [a[i],a[j]] = [a[j], a[i]]
            } else if(a[i] % 2 == 1 && a[j] % 2 == 1) {
                if(a[j] < a[i])
                    [a[j],a[i]] = [a[i], a[j]]
            }
        }
    }
    return a
}

//console.log(fourth([7, 3, 4, 9, 5, 8, 17]))

function Fifth(time) {
    this.time = time;

    this.timer = function() {
        let timer = setInterval(() => {      
        console.log(time)
        time--;

        if(time == 0){
            clearInterval(timer)
            setTimeout(() => console.log('Boom'), 1000);
        }

        }, 1000)
    }
}

let test = new Fifth(3)
//test.timer()

function sixth(...arr) {
    //"YYYY-MM-DD"
    return [...arr].sort((a,b) => Date.parse(a) - Date.parse(b))
}

//console.log(sixth('2002-09-11', '2002-01-11', '2002-01-10', '2012-05-23', '2010-06-30', '2000-07-08'))

function seventh1(a, b) {
    return a + b;
}

function seventh2(...args) {
    let sum = [...args].reduce((a,b) => a + b, 0);
    if(args.length > 1)
        return sum;
    return function(..._args) {
        sum = sum + [..._args].reduce((a,b) => a+b, 0)
        return sum;
    }
}

//console.log(seventh2(2)(1,2,3))
// console.log(seventh2(2,1))

const obj1 = {
    a: 'k',
    b: 'e',
}

const obj2 = {
    k: 'a',
    e: 'b',
}




const obj = {}
const values_1 = Object.keys(obj1)
const values_2 = Object.values(obj2)

for (let i = 0; i < values_1.length; i++) {
    obj[values_1[i]] = values_2[i];
}


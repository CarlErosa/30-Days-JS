const createCounter = (int) => {
    let present = int;
    return{
        increment: function(){
            return ++present;
        },
        decrement: function(){
            return --present;
        },
        reset: function(){
            return present = int;
    }
    }
}

//new learning

/* if you want pre increment use ++n
for example 

let n = 5
let result = ++n; (n becomes 6 and result is 6)
console.log(n);
console.log(result);

but if you want to use post increment use n++

let n = 5;
let result = n++; (result is 5, then n becomes 6)
console.log(n);     (Output: 6)
console.log(result); (Output: 5)

*/


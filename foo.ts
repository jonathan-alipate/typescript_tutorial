
function foo(bar?: "car" | "bus" | number) {
    return "Hello, " + bar;
}

let baz = "ABC";
console.log(foo())
console.log(foo('car'));
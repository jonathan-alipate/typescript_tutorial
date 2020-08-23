interface Quux {
    quuz: string
    corge: number
}

function foo(bar: Quux) {
    return "Hello, " + bar;
}

let baz = {
    quuz: "ABC",
    corge: 5
}

console.log(foo(baz));
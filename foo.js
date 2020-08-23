function foo(bar) {
    return "Hello, " + bar.quuz + bar.corge;
}
var baz = {
    quuz: "ABC",
    corge: 5
};
console.log(foo(baz));

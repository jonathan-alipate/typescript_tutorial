class Grault {
    garply: string
    constructor(quux: Quux, waldo: number[]){
        this.garply = quux.quuz + " " + quux.corge + " " + waldo
    }

    public getGarply(){
        return this.garply
    }
}

type Quux = {
    quuz: string
    corge: number
}

function foo(bar: Quux) {
    return "Hello, " + bar.quuz + bar.corge
}

let baz = {
    quuz: 'ABC',
    corge: 5
}

let fred: Grault = new Grault(baz, [1,2,3])

console.log(fred.getGarply())
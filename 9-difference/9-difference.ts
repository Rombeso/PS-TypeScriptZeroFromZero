interface IA {
    a: number
    b: string
}

interface IB {
    a: number
    c: boolean
}

let a: IA = { a: 5, b: '' }
let b: IB = { a: 10, c: true }

interface IDifference {
    b: string
}
type TDifference = Omit<IA, keyof IB>
type TDifference2<A extends {}, B extends {}> = Pick<IA, Exclude<keyof A, keyof B>>

function difference<A extends {}, B extends {}>(obj1: A, obj2: B): TDifference2<A, B> {
    let res: A = obj1
    for(let key in obj2) {
        if(key in obj1) {
            delete res[key]
        }
    }
    return res
}

let v1: TDifference2<IA, IB> = difference(a, b)

console.log(v1)
import { makeObservable, observable } from "mobx"
import { createContext } from "react"


class CounterStore {
    count = 0
    constructor() {
        makeObservable(this, {
            count: observable
        })
    }
}

export const CounterStoreContex = createContext(new CounterStore())
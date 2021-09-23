
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useContext } from 'react'
import { View, Text, button, Button } from 'react-native'
import { CounterStoreContex } from '../store/CounterStore'

const sida1 = observer(() => {
const counterStore = useContext(CounterStoreContex)


    return (
        <View>
        <Text>{counterStore.count}</Text>
        <Button title="increment" onPress={() => counterStore.count++}></Button>
        </View>
        )
    })

export default sida1
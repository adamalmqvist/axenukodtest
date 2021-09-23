import { observer } from 'mobx-react-lite'
import React from 'react'
import { useContext } from 'react'
import { View, Text,  } from 'react-native'
import { CounterStoreContex } from '../store/CounterStore'


const sida2 = observer(() => {
const counterStore = useContext(CounterStoreContex)
    return (

        <View>

        <Text>{counterStore.count}</Text>



        </View>
        )
})

export default sida2
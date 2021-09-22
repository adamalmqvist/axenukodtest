import React from 'react'
import { View, Text, } from 'react-native'
import {observer} from 'mobx-react-lite'
import {StoreContext} from '../store/Store.js'

const sida1 = observer((props) => {
    const { text } = React.useContext(StoreContext);

    return (

        <View>
        <Text>sida1</Text>
        <Text>{text}</Text>
        </View>
        )
})

export default sida1
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import sida1 from '../components/sida1'
import sida2 from '../components/sida2'
import sida3 from '../components/sida3'

const Tab = createBottomTabNavigator();

const Tabs = () => {
 return(
    <Tab.Navigator>
    <Tab.Screen name="sida1" component={sida1} />
    <Tab.Screen name="sida2" component={sida2} /> 
    <Tab.Screen name="sida3" component={sida3} />
    </Tab.Navigator>

 )
}

export default Tabs
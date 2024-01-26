import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Counter from '../../screens/Counter'
import CartContainer from '../../screens/CartContainer';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Main = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='CartContainer'>
                <Stack.Screen name="counter" component={Counter} />
                <Stack.Screen name="cartcontainer" component={CartContainer} />
                {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
            </Stack.Navigator>
        </NavigationContainer>
        // <Counter />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Main;

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../src/features/counter/counterSlice'

const Counter = ({ navigation }) => {
    const count = useSelector((state) => state.counter.value)
    const [incrementAmount, setIncrementAmount] = useState('2');
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginBottom: 15 }}  >
                    <Button title="Increment" onPress={() => dispatch(increment())} />
                    <Text style={{ margin: 10 }}>{count}</Text>
                    <Button title="Decrement" style={{ marginBottom: 20 }} onPress={() => dispatch(decrement())} />
                </View>
                <View>
                    <Button title="Add amount" onPress={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Amount"
                        defaultValue={incrementAmount}
                        keyboardType="numeric"
                        onChangeText={newVal => setIncrementAmount(newVal)}
                    />
                </View>
            </View>
            <View>
                <Button title="Go to cart page" onPress={() => navigation.navigate('cartcontainer')} />
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        width: 200,

    },
});

export default Counter;

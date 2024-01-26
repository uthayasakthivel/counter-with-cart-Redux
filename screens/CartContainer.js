import { ScrollView, View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../src/features/counter/counterSlice'
const CartContainer = ({ navigation }) => {
    const selectedValue = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <ScrollView className='cart'>
            <View>
                <Text>Welcome to CartPage</Text>
                <Text>Selected amount is {selectedValue}</Text>

            </View>
            <Button title='reset' onPress={() => dispatch(reset())}></Button>
            <Button onPress={() => { navigation.navigate('counter') }} title='Go to counter page'></Button>
        </ScrollView>
    );
};
export default CartContainer;

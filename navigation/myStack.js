import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}
            options={{headerShown:false}}/>
        <Stack.Screen name="Quiz" component={Quiz}
            options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default MyStack;
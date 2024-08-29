import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import About from '../screens/about';
import Cards from '../screens/cards';
import NetworkCalculator from '../screens/networkCalc';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}
            options={{headerShown:false}}/>
            <Stack.Screen name="Quiz" component={Quiz}
            options={{headerShown:false}}/>
             <Stack.Screen name="Result" component={Result}
            options={{headerShown:false}}/>
             <Stack.Screen name="About" component={About}
            options={{headerShown:false}}/>
            <Stack.Screen name="Cards" component={Cards}
            options={{headerShown:false}}/>
            <Stack.Screen name="NetworkCalculator" component={NetworkCalculator}
            options={{headerShown:false}}/>
        </Stack.Navigator>
        
    );
}

export default MyStack;
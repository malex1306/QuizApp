import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cards from '../screens/cards';
import Home from '../screens/home';
import About from '../screens/about';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={About} />
      
    </Tab.Navigator>
  );
}

export default MyTabs;
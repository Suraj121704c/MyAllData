import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StackNavigation } from './StackNaviagtion';
import { Products } from '../../../Screens/AfterLogin/Products';
import { Orders } from '../../../Screens/AfterLogin/Orders';

const Tab = createBottomTabNavigator();

export const TabNaviagtion = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false }} 
  >
    <Tab.Screen name="Home" component={StackNavigation} />
    <Tab.Screen name="Products" component={Products} />
    <Tab.Screen name="Orders" component={Orders} />
  </Tab.Navigator>
);

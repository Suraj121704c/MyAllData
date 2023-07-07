import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigation} from './StackNaviagtion';
import {Products} from '../../../Screens/AfterLogin/Products';
import {Orders} from '../../../Screens/AfterLogin/Orders';
import {HomeButton, OrdersButton, ProductButton, UserButton} from '../images';
import {Image} from 'react-native';
import OnHome from '../../../Screens/Drawers/OnHome';

const Tab = createBottomTabNavigator();

export const TabNaviagtion = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarStyle: {
        backgroundColor: 'black',
      },
      headerShown: false,
    }}>
    <Tab.Screen
      name="Home"
      component={StackNavigation}
      options={{
        tabBarIcon: ({color, size}) => (
          <Image
            source={HomeButton}
            style={{tintColor: color, width: size, height: size}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Products"
      component={Products}
      options={{
        tabBarIcon: ({color, size}) => (
          <Image
            source={ProductButton}
            style={{tintColor: color, width: size, height: size}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Orders"
      component={Orders}
      options={{
        tabBarIcon: ({color, size}) => (
          <Image
            source={OrdersButton}
            style={{tintColor: color, width: size, height: size}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="User"
      component={OnHome}
      options={{
        tabBarIcon: ({color, size}) => (
          <Image
            source={UserButton}
            style={{tintColor: color, width: size, height: size}}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

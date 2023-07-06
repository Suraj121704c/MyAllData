import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNaviagtion} from './Bottomnavigation';
import {Products} from '../../../Screens/AfterLogin/Products';
import OnHome from '../../../Screens/Drawers/OnHome';
import {Image} from 'react-native';
import {HomeButton, LogoutButton, ProductButton, UserButton} from '../images';
import {Logout} from '../../../Screens/AfterLogin/Logout';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{headerShown: false}}>
    <Drawer.Screen
      component={TabNaviagtion}
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={HomeButton}
            style={{tintColor: color, width: size, height: size}}
          />
        ),
      }}
      name="Login"
    />
    <Drawer.Screen
      name="Products"
      component={Products}
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={ProductButton}
            style={{tintColor: color, width: size, height: size}}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Settings"
      component={OnHome}
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={UserButton}
            style={{tintColor: color, width: size, height: size}}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Logout"
      component={OnHome}
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={LogoutButton}
            style={{tintColor: color, width: size, height: size}}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

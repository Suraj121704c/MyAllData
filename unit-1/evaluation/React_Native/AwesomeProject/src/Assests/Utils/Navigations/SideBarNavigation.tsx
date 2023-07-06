import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNaviagtion} from './Bottomnavigation';
import { Products } from '../../../Screens/AfterLogin/Products';
import OnHome from '../../../Screens/Drawers/OnHome';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{headerShown: false}}>
    <Drawer.Screen name="Login" component={TabNaviagtion} />
    <Drawer.Screen name="Products" component={Products} />
    <Drawer.Screen name="Settings" component={OnHome} />
  </Drawer.Navigator>
);

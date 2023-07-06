import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../../Screens/BeforeLogin/Login/Index';
import { Forget } from '../../../Screens/BeforeLogin/Forget/Forget';
import { SignIn } from '../../../Screens/BeforeLogin/SignIn/SignIn';
import OnHome from '../../../Screens/Drawers/OnHome';
import { Logout } from '../../../Screens/AfterLogin/Logout';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Forget" component={Forget} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Settings" component={OnHome} />
    <Stack.Screen name="Logout" component={Logout}/>
  </Stack.Navigator>
);

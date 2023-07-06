import { Forget } from '../../../Screens/BeforeLogin/Forget/Forget';
import Login from '../../../Screens/BeforeLogin/Login/Index';
import { SignIn } from '../../../Screens/BeforeLogin/SignIn/SignIn';

const {createNativeStackNavigator} = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

function StackNavi() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="Forget" component={Forget} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export default StackNavi;
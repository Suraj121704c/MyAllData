import {Image, Text, View} from 'react-native';
import {useEffect} from 'react';
import SplashScreen from '../../../Screens/BeforeLogin/SplashScreen/splashScreen';

const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs');
const {createDrawerNavigator} = require('@react-navigation/drawer');
const {createNativeStackNavigator} = require('@react-navigation/native-stack');
const {default: Login} = require('../../../Screens/BeforeLogin/Login/Index');
const {Forget} = require('../../../Screens/BeforeLogin/Forget/Forget');
const {SignIn} = require('../../../Screens/BeforeLogin/SignIn/SignIn');
const {default: OnHome} = require('../../../Screens/Drawers/OnHome');
const {Logout} = require('../../../Screens/AfterLogin/Logout');
const {Orders} = require('../../../Screens/AfterLogin/Orders');
const {Products} = require('../../../Screens/AfterLogin/Products');
const {
  HomeButton,
  OrdersButton,
  UserButton,
  ProductButton,
  LogoutButton,
} = require('../images');
const {SafeAreaView} = require('react-native-safe-area-context');
const {useSelector, useDispatch} = require('react-redux');
const {NavigationContainer} = require('@react-navigation/native');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FirstScreen from '../../../Screens/AfterLogin/FirstScreen/FirstScreen';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator
    initialRouteName="FirstScreen"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Settings" component={OnHome} />
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Logout" component={Logout} />
    <Stack.Screen name="FirstScreen" component={FirstScreen} />
  </Stack.Navigator>
);

const TabNaviagtion = () => (
  <Tab.Navigator
    initialRouteName="FirstScreen"
    screenOptions={{
      tabBarStyle: {
        borderTopLeftRadius : wp(5),
        backgroundColor: 'black',
        borderColor : "black",
        borderTopRightRadius : wp(5),
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

const DrawerNavigation = () => (
  <SafeAreaView style={{flex: 1}}>
    <Drawer.Navigator
      initialRouteName="FirstScreen"
      screenOptions={{headerShown: false}}
      drawerStyle={{
        width: '100%',
        backgroundColor: 'purple',
      }}>
      <Drawer.Screen
        component={TabNaviagtion}
        options={{
          drawerLabel: '',
          drawerIcon: ({color, size}) => (
            <View
              style={{
                flex: 30,
                flexDirection: 'row-reverse',
                justifyContent: 'space-evenly',
              }}>
              <View>
                <Image
                  source={HomeButton}
                  style={{
                    tintColor: color,
                    width: size,
                    height: size,
                    marginLeft: 90,
                  }}
                />
              </View>
              <View>
                <Text style={{fontSize: 20}}>Home</Text>
              </View>
            </View>
          ),
        }}
        name="Login"
      />
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          drawerLabel: '',
          drawerIcon: ({color, size}) => (
            <View
              style={{
                flex: 30,
                flexDirection: 'row-reverse',
                justifyContent: 'space-evenly',
              }}>
              <View>
                <Image
                  source={ProductButton}
                  style={{
                    tintColor: color,
                    width: size,
                    height: size,
                    marginLeft: 75,
                  }}
                />
              </View>
              <View>
                <Text style={{fontSize: 20}}>Products</Text>
              </View>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={OnHome}
        options={{
          drawerLabel: '',
          drawerIcon: ({color, size}) => (
            <View
              style={{
                flex: 30,
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  source={UserButton}
                  style={{tintColor: color, width: size, height: size}}
                />
              </View>
              <View>
                <Text style={{fontSize: 20}}>Setting</Text>
              </View>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerLabel: '',
          drawerIcon: ({color, size}) => (
            <View
              style={{
                flex: 30,
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  source={LogoutButton}
                  style={{tintColor: color, width: size, height: size}}
                />
              </View>
              <View>
                <Text style={{fontSize: 20}}>Logout</Text>
              </View>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  </SafeAreaView>
);

export const AppNavigator = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <DrawerNavigation />
      ) : (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Splash">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Forget" component={Forget} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

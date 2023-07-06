import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNaviagtion} from './Bottomnavigation';
import {Products} from '../../../Screens/AfterLogin/Products';
import OnHome from '../../../Screens/Drawers/OnHome';
import {Image, View, Text, SafeAreaView} from 'react-native';
import {HomeButton, LogoutButton, ProductButton, UserButton} from '../images';
import {Logout} from '../../../Screens/AfterLogin/Logout';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => (
  <SafeAreaView style={{flex : 1}}>
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      drawerStyle={{
        width: '100%',
        flex : 1
      }}>
      <Drawer.Screen
        component={TabNaviagtion}
        options={{
          drawerIcon: ({color, size}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 30,
                justifyContent: 'space-between',
              }}>
              <Image
                source={HomeButton}
                style={{tintColor: color, width: size, height: size}}
              />
            </View>
          ),
        }}
        name="Login"
      />
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          drawerIcon: ({color, size}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 23,
                justifyContent: 'space-between',
              }}>
              <Image
                source={ProductButton}
                style={{tintColor: color, width: size, height: size}}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={OnHome}
        options={{
          drawerIcon: ({color, size}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 23,
                justifyContent: 'space-between',
              }}>
              <Image
                source={UserButton}
                style={{tintColor: color, width: size, height: size}}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: ({color, size}) => (
            <View
              style={{
                alignItems: 'center',
                marginRight: 30,
                justifyContent: 'space-between',
              }}>
              <Image
                source={LogoutButton}
                style={{tintColor: color, width: size, height: size}}
              />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  </SafeAreaView>
);

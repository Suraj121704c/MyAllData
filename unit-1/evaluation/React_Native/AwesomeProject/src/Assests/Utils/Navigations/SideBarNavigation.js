import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNaviagtion} from './Bottomnavigation';
import {Products} from '../../../Screens/AfterLogin/Products';
import OnHome from '../../../Screens/Drawers/OnHome';
import {Image, View, Text, SafeAreaView} from 'react-native';
import {HomeButton, LogoutButton, ProductButton, UserButton} from '../images';
import {Logout} from '../../../Screens/AfterLogin/Logout';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => (
  <SafeAreaView style={{flex: 1}}>
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      drawerStyle={{
        width: '100%',
        backgroundColor : "purple"
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

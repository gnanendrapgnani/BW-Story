import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import {
  Bell,
  CircleUserRound,
  Compass,
  Home,
  Navigation,
  PlusCircle,
  Settings,
} from "lucide-react-native";

import Sitting from "../screens/Sitting";
import UserProfile from "../screens/UserProfile";
import Discover from "../screens/Discover";
import LocalScreen from "../screens/LocalScreen";
import AddScreen from "../screens/AddScreen";
import Profile from "../screens/Profile";
import Alert from "../screens/Alert";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const iconMap = {
  Discover: Compass,
  Settings: Settings,
  LocalScreen: Navigation,
  AddScreen: PlusCircle,
  Alert: Bell,
  Profile: CircleUserRound,
};

const getTabIcon = (routeName, color, size) => {
  const IconComponent = iconMap[routeName];
  return IconComponent ? <IconComponent color={color} size={size} /> : null;
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => getTabIcon(route.name, color, size),
      tabBarActiveTintColor: "#0F3E47",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Discover" component={Discover} />
    <Tab.Screen name="LocalScreen" component={LocalScreen} />
    <Tab.Screen name="AddScreen" component={AddScreen} />
    <Tab.Screen name="Alert" component={Alert} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#0F3E47" },
      headerTintColor: "#FFFFFF",
      headerTitleAlign: "center",
      headerTitle: () => (
        <Image
          source={require("../../assets/appLogo.png")}
          style={{ width: 100, height: 40, resizeMode: "contain" }}
        />
      ),
    }}
  >
    <Drawer.Screen name="MainTabs" component={TabNavigator} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="DrawerRoot"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="UserProfile"
      component={UserProfile}
      options={{
        title: "Profile",
        headerShown: true,
        headerStyle: { backgroundColor: "#0F3E47" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;

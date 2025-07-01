import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import { Home, Settings } from "lucide-react-native";

import HomeScreen from "../screens/HomeScreen";
import Sitting from "../screens/Sitting";
import UserProfile from "../screens/UserProfile";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const iconMap = {
  Home: Home,
  Settings: Settings,
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
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={Sitting} />
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

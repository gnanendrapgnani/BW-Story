import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to User Profile"
        onPress={() => navigation.navigate("UserProfile")}
      />
    </View>
  );
};

export default HomeScreen;

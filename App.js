import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import MyCart from "./components/screens/MyCart";
import ProductInfo from "./components/screens/ProductInfo";
import { TodoListProvider } from "./components/database/Context";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <TodoListProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="ProductInfo" component={ProductInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoListProvider>
  );
};

export default App;

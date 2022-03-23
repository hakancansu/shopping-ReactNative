import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { TodoListContext } from "../database/Context";
import { COLOURS } from "../database/Database";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MyCart = ({ route, navigation }) => {
  const { cart, setCart } = useContext(TodoListContext);

  const removeCart = (item) => {
    const checkBasket = cart.find((c) => c.id === item.id);
    if (checkBasket) {
      checkBasket.count = 0;
      setCart([...cart.filter((c) => c.id !== item.id)]);
    }
  };

  const azalt = (item) => {
    const checkBasket = cart.find((c) => c.id === item.id);
    if (checkBasket.count > 0) {
      checkBasket.count -= 1;
      setCart([...cart.filter((c) => c.id !== item.id), checkBasket]);
    }
  };

  const arttir = (item) => {
    const checkBasket = cart.find((c) => c.id === item.id);
    if(checkBasket) {
      checkBasket.count +=1;
      setCart([...cart.filter((c) => c.id !== item.id), checkBasket]);
    }
  }

  const renderProducts = (item, index) => {
    return (
      <View
        style={{
          width: "100%",
          height: 100,
          marginVertical: 6,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "30%",
            height: 100,
            padding: 14,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
          }}
        >
          <Image
            source={item.productImage}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <View
          style={{ flex: 1, height: "100%", justifyContent: "space-around" }}
        >
          <View>
            <Text
              style={{
                fontSize: 14,
                maxWidth: "100%",
                color: COLOURS.black,
                fontWeight: "600",
                letterSpacing: 1,
              }}
            >
              {item.productName}
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  maxWidth: "85%",
                  marginRight: 4,
                }}
              >
                &#8377;{item.productPrice}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  borderRadius: 100,
                  marginRight: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundMedium,
                  opacity: 0.5,
                }}
              >
                <TouchableOpacity
                  onPress={() => azalt(item)}
                  style={{ opacity: 0.8 }}
                >
                  <MaterialCommunityIcons
                    name="minus"
                    style={{ fontSize: 16, color: COLOURS.backgroundDark }}
                  />
                </TouchableOpacity>
              </View>
              <Text>{item.count}</Text>
              <View
                style={{
                  borderRadius: 100,
                  marginLeft: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundMedium,
                  opacity: 0.5,
                }}
              >
                <TouchableOpacity onPress={()=>arttir(item)}>
                  <MaterialCommunityIcons
                    name="plus"
                    style={{ fontSize: 16, color: COLOURS.backgroundDark }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeCart(item)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 16,
                  color: COLOURS.backgroundDark,
                  padding: 8,
                  borderRadius: 100,
                }}
              ></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{ width: "100%", height: "100%", backgroundColor: COLOURS.white }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            paddingTop: 16,
            paddingHorizontal: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundDark,
                padding: 12,
                backgroundColor: COLOURS.backgroundLight,
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{ fontSize: 14, color: COLOURS.black, fontWeight: "400" }}
          >
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.black,
            fontWeight: "500",
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}
        >
          My Cart
        </Text>
        <View style={{ paddingHorizontal: 16 }}>
          {cart ? cart.map(renderProducts) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default MyCart;

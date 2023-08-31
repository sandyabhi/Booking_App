import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const user = useSelector((state) => state.user);

  // console.log({ user }, "-------");

  return (
    <View
      style={{
        flexDirection: "column",
        width: "100%",
        marginTop: 30,
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Logged In : {user?.email}
        </Text>
      </View>

      <View
        style={{
          marginTop: 30,
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{ backgroundColor: "white", padding: 15, margin: 10 }}
        >
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              fontWeight: "bold",
              color: "#007FFF",
            }}
          >
            Login
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ backgroundColor: "#007FFF", padding: 15, margin: 10 }}
        >
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});

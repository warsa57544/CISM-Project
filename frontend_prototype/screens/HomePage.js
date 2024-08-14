import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView, Dimensions, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const { width, height } = Dimensions.get("window");

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Image
          style={styles.menuIcon}
          contentFit="cover"
          source={require("../assets/menu.png")}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.homePage}>
          <Image
            style={styles.serani1Icon}
            contentFit="cover"
            source={require("../assets/serani-1.png")}
          />
          <Text style={styles.checkYourDevice}>Check Your Device</Text>
          <Text style={styles.thisIsCompleted}>
            This is completed by a team of our professional service providers and supervised by a manager.
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.employeeButton]}
              onPress={() => navigation.navigate("Profiles")}
            >
              <Text style={styles.buttonText}>Employee Login</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.adminButton]}
              onPress={() => navigation.navigate("AdminDashboard")}
            >
              <Text style={styles.buttonText}>ADMIN Login</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.signUpButton]}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  navbar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  homePage: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  serani1Icon: {
    width: '100%',
    height: width * 0.618,
    aspectRatio: 3 / 1,
    marginBottom: 20,
    borderRadius: Border.br_21xl,
  },
  checkYourDevice: {
    fontSize: 30,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
    marginBottom: 10,
  },
  thisIsCompleted: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorBlack,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  button: {
    width: '100%',
    height: 65,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_xl,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  employeeButton: {},
  adminButton: {},
  signUpButton: {},
});

export default HomePage;
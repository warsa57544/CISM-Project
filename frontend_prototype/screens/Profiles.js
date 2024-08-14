import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const { width, height } = Dimensions.get("window");

const Profiles = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Add your sign up logic here
    navigation.navigate("Dashboard");
  };

  const handleLogin = () => {
    // Add your login logic here
    navigation.navigate("Dashboard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profiles}>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={styles.iconsanslineararrowLeft}
                contentFit="cover"
                source={require("../assets/iconsanslineararrowleft.png")}
              />
            </Pressable>
            <Text style={styles.client}>Client</Text>
            <Pressable onPress={() => {/* Handle create user */}}>
              <View style={styles.createUserButton}>
                <Image
                  style={styles.iconsansbolduserCircle2}
                  contentFit="cover"
                  source={require("../assets/iconsansboldusercircle21.png")}
                />
                <Text style={styles.createUser}>Create User</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.profileContent}>
            <Text style={styles.myProfile}>My Profile</Text>
            <Text style={styles.updateYourAccount}>
              Update your account settings
            </Text>

            <View style={styles.infoContainer}>
              <Text style={styles.personalInformation}>
                Personal Information
              </Text>
              <Text style={styles.updateYourPersonal}>
                Update your personal information
              </Text>

              <View style={styles.inputField}>
                <Text style={styles.inputLabel}>Name :</Text>
                <Text style={styles.inputPlaceholder}>Enter your name</Text>
              </View>

              <View style={styles.inputField}>
                <Text style={styles.inputLabel}>Email :</Text>
                <Text style={styles.inputPlaceholder}>
                  Enter your email or phone number
                </Text>
              </View>

              <View style={styles.inputField}>
                <Text style={styles.inputLabel}>Password :</Text>
                <Text style={styles.inputPlaceholder}>
                  Enter your password
                </Text>
              </View>

              <Pressable
                style={styles.button}
                onPress={handleSignUp} // Corrected to invoke the function
              >
                <Text style={styles.buttonText}>Sign up</Text>
              </Pressable>

              <Pressable
                style={styles.button}
                onPress={handleLogin} // Corrected to invoke the function
              >
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Menu")}>
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/squared-menu.png")}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Wallet")}>
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/wallet.png")}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Settings")}>
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/settings.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  profiles: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  iconsanslineararrowLeft: {
    width: 30,
    height: 30,
  },
  client: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  createUserButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    padding: 5,
    borderRadius: Border.br_11xl,
  },
  iconsansbolduserCircle2: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  createUser: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  profileContent: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_11xl,
    padding: 20,
  },
  myProfile: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    color: Color.colorBlack,
    marginBottom: 10,
  },
  updateYourAccount: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBoldItalic,
    fontStyle: "italic",
    color: Color.colorDarkslategray,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "#f7f7f7",
    borderRadius: Border.br_11xl,
    padding: 20,
  },
  personalInformation: {
    fontSize: 17,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    color: Color.colorBlack,
    marginBottom: 10,
  },
  updateYourPersonal: {
    fontSize: 13,
    fontFamily: FontFamily.robotoLight,
    color: Color.colorBlack,
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_11xl,
    padding: 15,
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    color: Color.colorBlack,
    marginBottom: 5,
  },
  inputPlaceholder: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoLight,
    color: Color.colorBlack,
  },
  button: {
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_11xl,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: Color.colorPaleturquoise,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default Profiles;

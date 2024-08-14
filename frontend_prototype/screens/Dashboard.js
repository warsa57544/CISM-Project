import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, ScrollView, SafeAreaView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const { width } = Dimensions.get('window');

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.clientDashboard}>Client Dashboard</Text>
        <View style={styles.userInfo}>
          <Image
            style={styles.userIcon}
            contentFit="cover"
            source={require("../assets/iconsansboldusercircle2.png")}
          />
          <Text style={styles.username}>Username</Text>
        </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.dashboard}>
          <View style={styles.balanceParent}>
            <View style={styles.balanceRow}>
              <View style={[styles.balanceItem, styles.balanceItemWide]}>
                <Text style={styles.itemTitle}>Available devices</Text>
                <Text style={styles.deviceCount}>3</Text>
                <Text style={styles.deviceList}>Tablet, Laptop, Peripherals</Text>
              </View>
              <View style={[styles.balanceItem, styles.balanceItemNarrow]}>
                <Text style={styles.itemTitle}>My Devices</Text>
                <Text style={styles.deviceCount}>4</Text>
              </View>
            </View>
            
            <View style={[styles.balanceItem, styles.balanceItemFull]}>
              <Text style={styles.itemTitle}>New devices</Text>
              <Text style={styles.deviceCount}>0</Text>
              <Text style={styles.comingSoon}>Coming soon</Text>
            </View>
            
            <Text style={styles.checkMaintenance}>Check maintenance</Text>
            
            <Pressable style={styles.transactionButton}>
              <Text style={styles.transactionText}>Transaction</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.bottomNav}>
        <Pressable onPress={() => navigation.navigate("Profiles")}>
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
        </Pressable>
        <Image
          style={styles.navIcon}
          contentFit="cover"
          source={require("../assets/squared-menu.png")}
        />
        <Image
          style={styles.navIcon}
          contentFit="cover"
          source={require("../assets/wallet.png")}
        />
        <Image
          style={styles.navIcon}
          contentFit="cover"
          source={require("../assets/settings.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorBlack,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
  },
  dashboard: {
    flex: 1,
  },
  clientDashboard: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
  },
  balanceParent: {
    flex: 1,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  balanceItem: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xl,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Color.colorBlack,
  },
  balanceItemWide: {
    width: '60%',
  },
  balanceItemNarrow: {
    width: '35%',
  },
  balanceItemFull: {
    width: '100%',
  },
  itemTitle: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    color: Color.colorBlack,
    marginBottom: 10,
  },
  deviceCount: {
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    color: Color.colorBlack,
    marginBottom: 5,
  },
  deviceList: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  comingSoon: {
    fontSize: FontSize.size_mini,
    color: "rgba(2, 91, 0, 0.97)",
  },
  checkMaintenance: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    color: Color.colorBlack,
    marginBottom: 20,
  },
  transactionButton: {
    backgroundColor: Color.colorLimegreen_200,
    borderRadius: Border.br_11xl,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  transactionText: {
    color: Color.colorLimegreen_100,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  username: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: Color.colorBlack,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default Dashboard;
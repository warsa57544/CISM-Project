import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const AdminDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image
            style={styles.menuIcon}
            contentFit="cover"
            source={require("../assets/menu.png")}
          />
          <Image
            style={styles.profileIcon}
            contentFit="cover"
            source={require("../assets/unsplashj3lfjn6deo1.png")}
          />
        </View>
        
        <Text style={styles.title}>Admin Dashboard</Text>
        
        <Text style={styles.sectionTitle}>Overview of Equipment</Text>
        
        <View style={styles.overviewCard}>
          <View style={styles.overviewItem}>
            <Text style={styles.overviewLabel}>Already allocated</Text>
            <Text style={styles.overviewValue}>30</Text>
          </View>
          <View style={styles.overviewItem}>
            <Text style={styles.overviewLabel}>Not allocated</Text>
            <Text style={styles.overviewValue}>7</Text>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>Allocation of Equipment</Text>
        
        <View style={styles.allocationCard}>
          <Text style={styles.allocationItem}>Available: 30</Text>
          <Text style={styles.allocationItem}>Check out: 10</Text>
          <Text style={styles.allocationItem}>Maintenance: 15</Text>
        </View>
        
        <Text style={styles.sectionTitle}>Departments with devices</Text>
        
        <View style={styles.departmentsCard}>
          <Text style={styles.departmentItem}>Human Resource</Text>
          <Text style={styles.departmentItem}>Finance</Text>
          <Text style={styles.departmentItem}>IT</Text>
        </View>
        
        <Text style={styles.sectionTitle}>Transaction type</Text>
        
        <View style={styles.transactionCard}>
          {/* Add transaction type content here */}
        </View>
      </ScrollView>
      
      <View style={styles.bottomNav}>
        <Image style={styles.navIcon} source={require("../assets/home.png")} />
        <Image style={styles.navIcon} source={require("../assets/squared-menu.png")} />
        <Image style={styles.navIcon} source={require("../assets/wallet.png")} />
        <Image style={styles.navIcon} source={require("../assets/settings.png")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
  overviewCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_xl,
    padding: 15,
  },
  overviewItem: {
    alignItems: 'center',
  },
  overviewLabel: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratSemiBold,
  },
  overviewValue: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    marginTop: 5,
  },
  allocationCard: {
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_xl,
    padding: 15,
  },
  allocationItem: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratSemiBold,
    marginBottom: 5,
  },
  departmentsCard: {
    backgroundColor: Color.colorLightgreen,
    borderRadius: Border.br_xl,
    padding: 15,
  },
  departmentItem: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratSemiBold,
    marginBottom: 5,
  },
  transactionCard: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderColor: Color.colorGray,
    padding: 15,
    minHeight: 100,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: Color.colorGray,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default AdminDashboard;
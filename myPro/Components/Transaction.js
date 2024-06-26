import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const tasks = [
  { 
    key: 1, 
    logo: require("../assets/apple.png"),
    brand: "Apple Store",
    company: "Entertainment",
    salary: "-$5.99",
  },
  { 
    key: 2, 
    logo: require("../assets/spotify.png"),
    brand: "Spotify",
    company: "Music",
    salary: "-$12.99",
  },
  { 
    key: 3, 
    logo: require("../assets/moneyTransfer.png"),
    brand: "Money Transfer",
    company: "Transaction",
    salary: "$300",
  },
  { 
    key: 4, 
    logo: require("../assets/grocery.png"),
    brand: "Grocery",
    company: "Shop",
    salary: "-$88",
  },
];

export default function Transaction() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.biggerText}>Transaction</Text>
        <Text style={styles.seeAll}>Sell All</Text>
      </View>
      <View style={styles.listContainer}>
        {tasks.map(task => (
          <View style={styles.itemTaskContainer} key={task.key}>
            <View style={styles.iconBackground}>
              <Image source={task.logo} style={styles.logo} />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.leftColumn}>
                <Text style={styles.brandText}>{task.brand}</Text>
                <Text style={styles.companyText}>{task.company}</Text>
              </View>
              <View style={styles.rightColumn}>
                <Text style={styles.amountText}>{task.salary}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  biggerText: {
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 0,
    marginLeft: 1,
  },
  seeAll: {
    color: "#007BFF", 
    fontSize: 18,
    marginTop: -2,
    marginRight:20,
    flexDirection:'row',
  },
  listContainer: {
    flexDirection: "column",
  },
  itemTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#FFF",
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 20,
    width: 380,
    marginLeft: -29,
  },
  iconBackground: {
    backgroundColor: '#E5DFDF',
    borderRadius: 40,
    height: 75,
    width: 75,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  leftColumn: {
    flexDirection: 'column',
  },
  rightColumn: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  brandText: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: -0,
  },
  companyText: {
    fontSize: 1,
    color: "#555",
  },
  amountText: {
    fontSize: 19,
    color: "#555",
    marginRight:-27
  },
});

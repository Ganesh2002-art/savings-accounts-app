import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export default function ProductNavigation({
  currentIndex,
  accounts,
  setCurrentIndex
}) {

  const prevAccount = accounts[currentIndex - 1];
  const nextAccount = accounts[currentIndex + 1];

  return (
    <View style={styles.container}>

      {prevAccount && (
        <TouchableOpacity onPress={() => setCurrentIndex(currentIndex - 1)}>
          <Text style={styles.link}>
            {"< " + prevAccount.product}
          </Text>
        </TouchableOpacity>
      )}

      {nextAccount && (
        <TouchableOpacity onPress={() => setCurrentIndex(currentIndex + 1)}>
          <Text style={styles.link}>
            {nextAccount.product + " >"}
          </Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 25,
  width: "100%"
},

 link: {
  fontSize: 16,
  color: "#8c6300",
  fontWeight: "500"
}
});
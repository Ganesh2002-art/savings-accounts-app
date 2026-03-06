import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export default function AccountCard({ account }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{account.product}</Text>

      <Text style={styles.rate}>
        {account.interest}%
      </Text>

     <Text style={styles.text}>
  Minimum deposit: £{account.minimum ?? account["minimum "]}
</Text>
      <Text style={styles.text}>
        Interest type: {account.type}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
 card: {
  width: "100%",
  backgroundColor: COLORS.white,
  padding: 20,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: COLORS.border,
  marginBottom: 20
},

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },

  rate: {
    fontSize: 18,
    color: COLORS.primary,
    marginBottom: 12
  },

  text: {
    fontSize: 16,
    marginBottom: 4
  }
});
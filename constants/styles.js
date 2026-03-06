import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e4efee"
  },

 heading: {
  fontSize: 32,
  fontWeight: "bold",
  color: COLORS.primary,
  marginBottom: 20
}
});
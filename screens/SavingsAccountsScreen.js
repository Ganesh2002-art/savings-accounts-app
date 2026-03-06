import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import AccountCard from "../components/AccountCard";
import ProductNavigation from "../components/Navigation";

import { fetchAccounts } from "../services/api";
import { globalStyles } from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SavingsAccountsScreen() {

  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    loadAccounts();
  }, []);

  const loadAccounts = async () => {
    try {
      const data = await fetchAccounts();
      setAccounts(data);
    } catch (error) {
      console.log("Error loading accounts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Loading state
 if (loading) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
}

  // Empty state protection
  if (!accounts.length) {
    return (
      <View style={globalStyles.container}>
        <Text>No accounts available</Text>
      </View>
    );
  }

  const account = accounts[currentIndex];

return (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.heading}>
      Savings Accounts
    </Text>

    <AccountCard account={account} />

    <ProductNavigation
      currentIndex={currentIndex}
      accounts={accounts}
      setCurrentIndex={setCurrentIndex}
    />
  </SafeAreaView>
);
}
export const fetchAccounts = async () => {
  try {
    const response = await fetch("https://srest.com/accounts.json");

    if (!response.ok) {
      throw new Error("Failed to fetch accounts");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("API error:", error);
    return [];
  }
};
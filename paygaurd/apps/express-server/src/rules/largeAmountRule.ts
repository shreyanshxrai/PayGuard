export function largeAmountRule(amount: number) {
  const threshold = 10000;
  if (amount > threshold) {
    return {
      score: 30,
      reason:
        "Large amount transaction detected. Please verify the transaction details.",
    };
  }
  return {
    score: 0,
    reason: "Transaction amount is within the normal range.",
  };
}

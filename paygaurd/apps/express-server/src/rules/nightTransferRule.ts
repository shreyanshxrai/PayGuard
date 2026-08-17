export function nightTransferRule() {
  console.log("checking night transfer rule");
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 6) {
    return {
      score: 25,
      reason: "Night transfer detected. Please verify the transaction details.",
    };
  }
  return {
    score: 0,
    reason: "Transaction is not a night transfer.",
  };
}

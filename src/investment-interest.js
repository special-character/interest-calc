/*
 * A calculator for determining how much interest will be gained on an investment
 */
const investmentInterest = (
  principal,
  interestRate,
  additionsPerMonth,
  numMonths,
) => {
  let accountSum = principal
  let totalInterest = 0

  for (let i = 0; i < numMonths; i++) {
    const monthInterest = accountSum * interestRate * (1 / 12)
    totalInterest += monthInterest
    accountSum += monthInterest + additionsPerMonth
  }
  return totalInterest
}

export default investmentInterest

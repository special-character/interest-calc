/*
 * A calculator for determining how much interest will be paid on a loan and an estimate on how long the loan will be for.
 */
const loanInterest = (principal, interestRate, monthlyPayment) => {
  let principalLeft = principal
  let totalInterest = 0
  let totalPayment = 0
  let numMonths = 0

  while (principalLeft >= 0) {
    const monthInterest = principalLeft * interestRate * (1 / 12)
    const appliedToPrincipal = monthlyPayment - monthInterest
    const nextPrincipal = principalLeft - appliedToPrincipal

    totalPayment +=
      nextPrincipal < 0 ? principalLeft + monthInterest : monthlyPayment
    totalInterest += monthInterest
    principalLeft = nextPrincipal
    numMonths++
  }
  return totalInterest
}

export default loanInterest

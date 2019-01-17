/*
 * A calculator for determining how much interest will be paid on a loan and an estimate on how long the loan will be for.
 */
const loanInterest = (principal, interestRate, monthlyPayment) => {
  let principalLeft = principal
  let totalInterest = 0

  while (principalLeft >= 0) {
    const monthInterest = principalLeft * interestRate * (1 / 12)
    const appliedToPrincipal = monthlyPayment - monthInterest
    const nextPrincipal = principalLeft - appliedToPrincipal
    totalInterest += monthInterest
    principalLeft = nextPrincipal
  }
  return totalInterest
}

export default loanInterest

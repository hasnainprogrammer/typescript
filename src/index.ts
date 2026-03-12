function calculateTax(income: number, taxYear: number = 2023): number {
  if (taxYear < 2024) {
    return income * 0.2;
  }
  return income * 0.3;
}
console.log(calculateTax(45_000));

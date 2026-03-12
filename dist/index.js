"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2024) {
        return income * 0.2;
    }
    return income * 0.3;
}
console.log(calculateTax(45_000));
//# sourceMappingURL=index.js.map
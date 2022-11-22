var isUgly = function (n) {
  // Base Cases
  if (n == 1) return true;
  if (n <= 0) return false;

  // Condition to check if the
  // number is divided by 2, 3, or 5
  if (n % 2 == 0) {
    return isUgly(n / 2);
  }
  if (n % 3 == 0) {
    return isUgly(n / 3);
  }
  if (n % 5 == 0) {
    return isUgly(n / 5);
  }

  // Otherwise return false
  return false;
};

console.log(isUgly(6));

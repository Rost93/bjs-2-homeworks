"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    // Нет корней
    return arr;
  } else if (discriminant === 0) {
    // Один корень
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    // Два корня
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }
  
  return arr;
}

const roots = solveEquation(1, -3, 2);
console.log(roots); // Выводит [1, 2]

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Проверка типов аргументов
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }

  // Преобразование процентной ставки в доли
  const monthlyInterestRate = percent / 100 / 12;

  // Расчёт тела кредита
  const loanBody = amount - contribution;

  // Расчёт ежемесячного платежа
  const monthlyPayment =
    loanBody *
    (monthlyInterestRate +
      monthlyInterestRate /
        (Math.pow(1 + monthlyInterestRate, countMonths) - 1));

  // Расчёт общей суммы, которую придётся заплатить клиенту
  const totalPayment = monthlyPayment * countMonths;

  // Округление результата до двух знаков после запятой
  const roundedTotalPayment = parseFloat(totalPayment.toFixed(2));

  return roundedTotalPayment;
}

// Примеры использования функции
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Выводит 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Выводит 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Выводит 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Выводит 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Выводит 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // Выводит 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Выводит 12479.52
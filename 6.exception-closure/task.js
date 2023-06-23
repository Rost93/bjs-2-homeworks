function parseCount(value) {
  const parsedValue = Number.parseFloat(value);
  if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }
  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    if (!this.isValidTriangle()) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  isValidTriangle() {
    return (
      this.side1 + this.side2 > this.side3 &&
      this.side2 + this.side3 > this.side1 &&
      this.side3 + this.side1 > this.side2
    );
  }

  get perimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  get area() {
    const semiPerimeter = this.perimeter / 2;
    const areaSquared =
      semiPerimeter *
      (semiPerimeter - this.side1) *
      (semiPerimeter - this.side2) *
      (semiPerimeter - this.side3);
    const area = Math.sqrt(areaSquared);
    return parseFloat(area.toFixed(3));
  }
}

function getTriangle(side1, side2, side3) {
  try {
    const triangle = new Triangle(side1, side2, side3);
    return Object.freeze(triangle);
  } catch (error) {
    const invalidTriangle = {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      },
    };
    return Object.freeze(invalidTriangle);
  }
}

// Было не легко 














import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
}

const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState("0");

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    // Todo: Calculate subResult
    setFormula(number);
  }, [number]);

  const buildNumber = (numberString: string) => {
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      // Check if there's another zero and no dot
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      // Check if there's another zero, no dot, and is the first number
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      // Remove 00000000.00
      if (numberString === "0" && !number.includes(".")) return;

      return setNumber(number + numberString);
    }
    setNumber(number + numberString);
  };

  return {
    // Props
    formula,
    number,
    previousNumber,

    // Methods
    buildNumber,
  };
};

export default useCalculator;

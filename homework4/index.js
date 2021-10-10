function concatStrings(str, separator) {
  let sep;
  let newString;
  typeof separator === 'string' ? (sep = separator) : (sep = '');
  typeof str === 'string' ? (newString = str) : (newString = '');

  function concat(string) {
    if (typeof string === 'string') {
      newString += sep + string;
    };
    return concat;
  };

  concat.toString = () => {
    return newString;
  };

  return concat;
};

class Calculator {
  constructor(valueX, valueY) {
    this.valueX = valueX;
    this.valueY = valueY;
    if (!Number.isInteger(valueX) || !Number.isInteger(valueY)) {
      throw new Error();
    };
    
    if (!typeof BigInt(1) === 'bigint') {
      throw new Error();
    };
  };

  setX(num) {
    if (!Number.isInteger(num)) {
      throw new Error();
    };
    return this.valueX = num;
  };

  setY(num) {
    if (!Number.isInteger(num)) {
      throw new Error();
    };
    return this.valueY = num;
  };

  logSum() {
    return this.valueX + this.valueY;
  };

  logSub() {
    return this.valueX - this.valueY;
  };

  logMul() {
    return this.valueX * this.valueY;
  };

  logDiv() {
    if (this.valueY === 0) {
      throw new Error();
    };
    return this.valueX / this.valueY;
  };
};

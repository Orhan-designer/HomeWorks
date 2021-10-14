function concatStrings(str, separator) {
  let sep;
  let newString;
  typeof separator === 'string' ? (sep = separator) : (sep = '');
  typeof str === 'string' ? (newString = str) : (newString = '');

  function concat(string) {
    if (typeof string === 'string') {
      newString += sep + string;
      return concat;
    };
    return newString;
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
  };

  setX(num) {
    if (!Number.isInteger(num)) {
      throw new Error();
    };
    return (this.valueX = num);
  };

  setY(num) {
    if (!Number.isInteger(num)) {
      throw new Error();
    };
    return (this.valueY = num);
  };

  logSum() {
    console.log(this.valueX + this.valueY);
  };

  logSub() {
    console.log(this.valueX - this.valueY);
  };

  logMul() {
    console.log(this.valueX * this.valueY);
  };

  logDiv() {
    if (this.valueY === 0) {
      throw new Error();
    }
    console.log(this.valueX / this.valueY);
  };
};

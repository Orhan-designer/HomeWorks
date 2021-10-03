const firstObject = {
  a: 10,
  b: { c: 'Commander', d: 9, e: { f: 'Fill' } },
  true: true,
  h: { i: 85, j: { k: 89, l: 'Linda' }, m: 71 },
  n: { o: 56, p: 'Hello', q: 'World' },
};

const copyTheFirstObject = makeObjectDeepCopy(firstObject);

function makeObjectDeepCopy(obj) {
  const clObj = {};
  for (const i in obj) {
    if (obj[i] instanceof Object) {
      clObj[i] = makeObjectDeepCopy(obj[i]);
      continue;
    };
    clObj[i] = obj[i];
  };

  return clObj;
}

function selectFromInterval(arr, arg1, arg2) {
  let array = [];

  if (arg1 < 0 || arg2 < 0) {
    return array;
  };

  if (!Array.isArray(arr)) {
    throw new Error('Передан не массив!');
  };

  for (let i = 0; i < arr.length; i++) {
    if (!Number(arr[i])) {
      throw new Error('Невалидное число!');
    };
  };

  let start = 0;
  let end = 0;

  if (arg1 < arg2) {
    start = arg1 - 1;
    if (arr.length < arg2) {
      end = arr.length;
    } else {
      end = arg2;
    }
  } else {
    start = arg2 - 1;
    if (arr.length < arg1) {
      end = arr.length;
    } else {
      end = arg1;
    };
  };

  for (let i = start; i < end; i++) {
    array.push(arr[i]);
  };

  return array;
};

const myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return {
        done: true
      };
    };
  }
};

function forMyIterableObject(obj) {
  let from = obj.from;
  let to = obj.to;

  if (to < from || to === undefined || from === undefined || !Number(to) || !Number(from)) {
    throw new Error('Ошибка');
  };

  let array = [];

  for (let i = from; i <= to; i++) {
    array.push(i);
  };

  return array;
};

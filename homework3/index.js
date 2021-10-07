Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new Error();
  }

  const context = thisArg || this;
  const newArray = [];

  this.forEach((item, i, arr) => {
    if (callback.call(context, item, i, context)) {
      newArray.push(item);
    }
  });

  return newArray;
};

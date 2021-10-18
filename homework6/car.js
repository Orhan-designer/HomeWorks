class Car {
  #brand = '';
  get brand() {
    return this.#brand;
  };
  set brand(strBrand) {
    if (strBrand.length > 0 && strBrand.length <= 50) {
      this.#brand = strBrand;
    };
  };

  #model = '';
  get model() {
    return this.#model;
  };
  set model(strModel) {
    if (strModel.length > 0 && strModel.length <= 50) {
      this.#model = strModel;
    };
  };

  #yearOfManufacturing = null;
  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  };
  set yearOfManufacturing(findYear) {
    let currentYear = new Date().getFullYear();
    if (findYear >= 1900 && findYear <= currentYear) {
      this.#yearOfManufacturing = findYear;
    };
  };

  #maxSpeed = null;
  get maxSpeed() {
    return this.#maxSpeed;
  };
  set maxSpeed(maximumSpeed) {
    if (maximumSpeed >= 100 && maximumSpeed <= 300) {
      this.#maxSpeed = maximumSpeed;
    };
  };

  #maxFuelVolume = null;
  get maxFuelVolume() {
    return this.#maxFuelVolume;
  };
  set maxFuelVolume(maxFuel) {
    if (maxFuel >= 5 && maxFuel <= 20) {
      this.#maxFuelVolume = maxFuel;
    };
  };

  #fuelConsumption = null;
  get fuelConsumption() {
    return this.#fuelConsumption;
  };
  set fuelConsumption(fuel) {
    if (fuel >= 0) {
      this.#fuelConsumption = fuel;
    };
  };

  #currentFuelVolume = 0;
  get currentFuelVolume() {
    return this.#currentFuelVolume;
  };

  #isStarted = false;
  get isStarted() {
    return this.#isStarted;
  };

  #mileage = 0;
  get mileage() {
    return this.#mileage;
  };

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    };
    this.#isStarted = true;
  };

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    };
    this.#isStarted = false;
  };

  fillUpGasTank(amountOfFuelInLiters) {
    if (!Number.isInteger(amountOfFuelInLiters) || amountOfFuelInLiters === 0 || amountOfFuelInLiters < 0) {
      throw new Error('Неверное количество топлива для заправки');
    };

    if (this.#maxFuelVolume - this.#currentFuelVolume < amountOfFuelInLiters) {
      throw new Error('Топливный бак переполнен');
    };

    this.#currentFuelVolume += amountOfFuelInLiters;
  };

  drive(speed, numberOfHours) {
    if (!Number.isInteger(speed) || speed === 0 || speed < 0) {
      throw new Error('Неверная скорость');
    };

    if (!Number.isInteger(numberOfHours) || numberOfHours === 0 || numberOfHours < 0) {
      throw new Error('Неверное количество часов');
    };

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    };

    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    };

    if (this.#currentFuelVolume === 0) {
      throw new Error('Недостаточно топлива');
    };

    let result = this.#fuelConsumption / this.#maxFuelVolume;
    this.#mileage += result;
  };
};

export class Car {};

class Friend {
  constructor(name) {
    this.name = name;
    this.hungerLevel = 10;
    this.moodLevel = 10;
    this.energyLevel = 20;
  }

  getHungry() {
    setInterval(() => {
      this.hungerLevel--;
    }, 1000);
  }

  getBored() {
    setInterval(() => {
      this.moodLevel--;
    }, 1000);
  }

  getTired() {
    setInterval(() => {
      this.energyLevel--;
    }, 1000);
  }

  feed() {
    this.hungerLevel += 3;
    this.energyLevel += 3;
  }

  play() {
    this.moodLevel += 3;
    this.energyLevel -= 3;
  }

  sleep() {
    this.energyLevel += 5;
    this.hungerLevel -= 2;
  }

  dead() {
    if (this.hungerLevel <= 0 || this.moodLevel <= 0 || this.energyLevel <= 0) {
      return true;
    }
  }
}
export { Friend };

class bike {
  price: number;
  max_speed: number;
  miles = 0;
  constructor(price: number, max_speed: number, miles?: number) {
    this.price = price,
      this.max_speed = max_speed
  }

  displayInfo = () => {
    return console.log(this.price, this.max_speed, this.miles)
  }
  ride = () => {
    this.miles += 10;
    console.log("Riding");
    return this.miles;
  }
  reverse = () => {
    console.log("Reversing");
    return this.miles -= 5;
  }
}
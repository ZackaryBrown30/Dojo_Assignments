function coinChange(int) {
  var coinDict = {
    dollar: Math.floor(int / 100),
    quarter: Math.floor((int % 100) / 25),
    dime: Math.floor((int % 25) / 10),
    nickel: Math.floor(((int % 25) % 10) / 5),
    penny: Math.floor(int % 5)
  };
  console.log(coinDict);
}
coinChange(543);

/*they were put in alphabetical order! whats the story there? */

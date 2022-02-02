class Array {
    constructor() {
      this.argument = arguments;
    }
    myFind(condition) {
      for (const item of this.argument) {
        if (condition(item)) {
          return item;
        }
      }
    }
      myPush(newItem) {
      return (this.argument[this.argument.length++] = newItem);
    }}
  let arr = new Array(11, 12, 13, 14, 15);
  console.log(arr);
  console.log(arr.myPush(16));
  function checkNum(number) {
    return number > 14;
  }
  console.log(arr.myFind(checkNum));
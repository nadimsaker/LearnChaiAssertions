const chai = require("chai");

const expect = chai.expect;

let a = 1;
let b = 2;
expect(a).to.be.equals(a);

function myObj() {
  return {
    a: 100,
    b: "Hello world"
  };
}

(x = new myObj()), (y = new myObj());

expect(x).to.be.an("object");
//expect(x).to.be.equals(y);

expect(x).to.be.deep.equals(y, "x and y are equal.");

expect(x)
  .to.be.an("object")
  .and.to.be.deep.equals(y, "x and y are equal.");

let number = [1, 2, 3];
expect(number)
  .to.be.an("array")
  .and.to.include(4);

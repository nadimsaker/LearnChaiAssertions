const chai = require("chai");
//expect
const expect = chai.expect;
//should
const should = chai.should();

//assert
const assert = chai.assert;

let a = 1;
let b = 1;

//should
a.should.be.equals(b);

expect(a).to.be.equals(a);

assert.equal(a, b);

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
assert.deepEqual(x, y);
// deep equals
x.should.be.deep.equals(y);

x.should.be.an("object").and.to.be.deep.equals(y);

let number = [1, 2, 3];
expect(number)
  .to.be.an("array")
  .and.to.include(3);

number.should.be.an("array").that.include(3);
assert.isArray(number);

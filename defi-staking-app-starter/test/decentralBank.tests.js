const RWD = artifacts.require("RWD");
const Tether = artifacts.require("Tether");
const DecentralBank = artifacts.require("DecentralBank");

//bring im chai

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("decentralBank", (accounts) => {

let tether, rwd;
  //essentially what before() means is any code we put here will run before the test is run
before( async () => {
  let tether = await Tether.new();
  let rwd = await RWD.new();
})

  //we describe the test we want to run
  describe("Mock tether Deployment", async () => {
    it("Matches me successfully", async () => {
      const name = await tether.name();
      assert.equal(name, "Mock Tether Token");
    });
  });


  //we describe the test we want to run
  describe("Reward Token Deployment", async () => {
    it("Matches me successfully", async () => {
      const name = await rwd.name();
      assert.equal(name, "Reward Token");
    });
  });
});




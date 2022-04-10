const RWD = artifacts.require("RWD");
const Tether = artifacts.require("Tether");
const DecentralBank = artifacts.require("DecentralBank");

//bring im chai

require("chai")
    .use(require("chai-as-promised"))
    .should();

contract("decentralBank", ([owner, customer]) => {

    let tether, rwd, decentralBank;

    function tokens(number) {
        //this converts the number in eths to wei
        return web3.utils.toWei(number.toString(), "ether");
    }

    //essentially what before() means is any code we put here will run before the test is run
    before(async () => {
        tether = await Tether.new();
        rwd = await RWD.new();
        decentralBank = await DecentralBank.new(rwd.address, tether.address);

        await rwd.transfer(DecentralBank.address, tokens('1000000'))

        //transfer 100 mock tokens to the customer from the onwner
        await tether.transfer(customer, tokens('100'),{from: owner})
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




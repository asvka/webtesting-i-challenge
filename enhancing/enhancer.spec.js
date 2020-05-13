const enhancer = require('./enhancer.js');

describe("Enhancer unit tests", () => {
    let item1, item2
    beforeEach(() => {
        item1 = {
            name: "Silver Daggers",
            durability: 10,
            enhancement: 5,
        };
        item2 = {
            name: "Elven Bow",
            durability: 20,
            enhancement: 18,
        }
    })
    it("repairs", () => {
        const repairedItem = enhancer.repair(item1)
        return expect(repairedItem.durability).toEqual(100);
    })

    it("succeeds", () => {
        const enhancedItem = enhancer.succeed(item2)
        return expect(enhancedItem.enhancement).toEqual();
    })

    // it("fails", () => {
        
    // })

    // it("gets", () => {
        
    // })
})

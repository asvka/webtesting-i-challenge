const enhancer = require('./enhancer.js');

describe("Enhancer unit tests", () => {
    let item1, item2, item3, item4
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
        };
        item3 = {
            name: "Mythril Claw",
            durability: 50,
            enhancement: 10,
        };
        item4 = {
            name: "Nanatsusaya no Tachi",
            durability: 100,
            enhancement: 20,
        };
    })
    it("repairs", () => {
        const repairedItem = enhancer.repair(item1)
        return expect(repairedItem.durability).toEqual(100);
    })

    it("succeeds", () => {
        const enhancedItem = enhancer.succeed(item2)
        return expect(enhancedItem.enhancement).toBe(19);
    })

    it("fails", () => {
        const failedItem = enhancer.fail(item3)
        return expect(failedItem.durability).toBe(45);
    })

    // it("gets", () => {
        
    // })
})

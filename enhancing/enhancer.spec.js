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
        expect(repairedItem.durability).toEqual(100)
        expect(repairedItem.name).toBe("Silver Daggers")
    })

    it("doesn't get repaired", () => {
        const repairedItem = item1
        expect(repairedItem.durability).toEqual(10)
        expect(repairedItem.name).toBe("Silver Daggers")
    })

    it("succeeds", () => {
        const enhancedItem = enhancer.succeed(item2)
        expect(enhancedItem.enhancement).toBe(19)
        expect(enhancedItem.name).toBe("Elven Bow")
    })

    it("cannot be enhanced", () => {
        const enhancedItem = enhancer.succeed(item4)
        expect(enhancedItem.enhancement).toBe(20)
        expect(enhancedItem.name).toBe("Nanatsusaya no Tachi")
    })

    it("fails", () => {
        const failedItem1 = enhancer.fail(item3)
        expect(failedItem1.durability).toBe(45);
        expect(failedItem1.name).toBe("Mythril Claw")
    })

    it("fails a different way", () => {
        const failedItem2 = enhancer.fail(item4)
        expect(failedItem2.durability).toBe(90);
        expect(failedItem2.name).toBe("Nanatsusaya no Tachi")
    })

    // it("gets", () => {
        
    // })
})

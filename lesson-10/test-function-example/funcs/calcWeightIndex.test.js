import calcWeightIndex from "./calcWeightIndex.js";

/*
1. Given weight in kg and height in metr.
2. Return weight / (height * height), round to 2 float.
3. If given invalid data throw error with correct message.

90, 1.9 => 24.93
1.9, 90 => throw error 'weight must be 1 argument and height - 2'
 => throw error 'weight and height required'
'90', '1.9' => throw error 'weight and height must be number' 
*/

describe("test calcWeightIndex function", ()=> {
    test("90, 1.9 => 24.93", ()=> {
        const result = calcWeightIndex(90, 1.9);
        expect(result).toBe(24.93);
        /*
        const expect = result => {
            return {
                result,
                toBe(value) {
                    return this.result === value,
                }
            }
        }
        */
    })

    test("1.9, 90 => throw error 'weight must be 1 argument and height - 2'", ()=> {
        expect(() => calcWeightIndex(1.9, 90)).toThrow('weight must be 1 argument and height - 2')
    })

    test(" => throw error 'weight and height required'", ()=> {
        expect(() => calcWeightIndex()).toThrow('weight and height required')
    })

    test("'90', '1.9' => throw error 'weight and height must be number'", ()=> {
        expect(() => calcWeightIndex('90', '1.9')).toThrow('weight and height must be number')
    })
})

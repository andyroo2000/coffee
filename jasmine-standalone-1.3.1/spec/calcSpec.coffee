describe "conversion from water to coffee", ->
  it "converts water to coffee", ->
    expect(waterToCoffeeCalc 17).toBe('1.00')

describe "conversion from coffee to water", ->
  it "converts coffee to water", ->
    expect(coffeeToWaterCalc 1).toBe('17.00')

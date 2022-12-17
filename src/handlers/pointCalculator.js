const { statsCostCalculator } = require('./defenceQualityHandler/statsCostCalculator')
const { weaponCostCalculator } = require('./weaponHandler/weaponCostCalculator')

const pointCalculator = (unit) => {

    console.log(unit)

    const stats = getStatsCost(unit);
    const weapons = 0; //getWeaponsCost(unit);
    const rules = 0; //getRulesCost(unit);

    const modelTotal = stats + weapons + rules

    console.log(stats)
    console.log(modelTotal)

    const unitTotal = modelTotal * unit.models


    return {unitTotal, modelTotal, stats, weapons, rules}

}

const getStatsCost = (unit) => {

    return statsCostCalculator(unit.quality) + statsCostCalculator(unit.defense);

}

const getWeaponsCost = (unit) => {

    let cost = 0;

    // for (weapon in unit.weapons) {
    //     cost = cost + weaponCostCalculator(weapon)
    // }

    return cost;

}

const getRulesCost = (unit) => {

    let cost = 0;

    //TODO CALC COST

    return cost;

}




exports = module.exports = { pointCalculator }
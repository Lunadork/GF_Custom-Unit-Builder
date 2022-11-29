const { statsCostCalculator } = require('./defenceQualityHandler/statsCostCalculator')
const { weaponCostCalculator } = require('./')

const pointCalculator = (unit) => {

    const stats = getStatsCost(unit);
    const weapons = getWeaponsCost(unit);
    const rules = getRulesCost(unit);

    const modelTotal = stats + weapons + rules

    const unitTotal = modelTotal * unit.models


    return [unitTotal, modelTotal, stats, weapons, rules]

}

const getStatsCost = (unit) => {

    return statsCostCalculator(unit.quality) + statsCostCalculator(unit.defense);

}

const getWeaponsCost = (unit) => {

    let cost = 0;

    for (weapon in unit.weapons) {
        cost = cost + weaponCostCalculator(weapon)
    }

    return cost;

}

const getRulesCost = (unit) => {

    let cost = 0;

    //TODO CALC COST

    return cost;

}




exports = module.exports = { pointCalculator }
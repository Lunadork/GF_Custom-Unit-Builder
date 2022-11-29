const pointCalculator = (unit) => {

    const stats = getStatsCost(unit.stats);
    const weapons = getWeaponsCost(unit.weapons);
    const rules = getRulesCost(unit.rules);

    const total = stats + weapons + rules

    return [total, stats, weapons, rules]

}

const getStatsCost = (stats) => {

    let cost = 0;

    //TODO CALC COST

    return cost;
}

const getWeaponsCost = (weapons) => {

    let cost = 0;

    //TODO CALC COST

    return cost;

}

const getRulesCost = (rules) => {

    let cost = 0;

    //TODO CALC COST

    return cost;

}


exports = module.exports = { pointCalculator }
const weaponCostCalculator = (weapon) => {
    let cost = 0;

    const baseCost = getBaseCost(weapon)
    const apCost = getApCost(weapon)

    const subCost = baseCost + apCost

    const specialCost = getSpecialCost(weapon, subCost) 

    return cost;
}

const getBaseCost = (weapon) => {
    
    return weapon.range * weapon.attacks 

}

const getSpecialCost = (weapon) => {
    let cost = 0

    switch (weapon.ap){
        case 0:
            break;
        case 1:
            cost = cost + 1.5
            break;
        case 2:
            cost = cost + 2
            break;
        case 3:
            cost = cost + 2.5
            break;
        case 4:
            cost = cost + 3
            break;
        default:
            console.warn(`Invalid AP value, ${weapon.ap}`)
    }

    for (rule in weapon.rules){
        switch (rule){
            
        }
    }
}

exports = module.exports = { weaponCostCalculator }
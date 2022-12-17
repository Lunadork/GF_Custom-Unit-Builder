const statsCostCalculator = (stat) => {

    let cost = 0;

    switch (stat) {
        case 6:
            cost = cost + 2
            break;
        case 5:
            cost = cost + 4
            break;
        case 4:
            cost = cost + 6
            break;
        case 3:
            cost = cost + 8
            break;
        case 2:
            cost = cost + 12
            break;
        default:
            console.log(`Invalid quality/defense, ${stat}`);
    }

    return cost;
}

exports = module.exports = { statsCostCalculator }
const baseRules =  [
    {name: 'Aircraft', cost: 15, calc: 0},
    {name: 'Ambush', cost: 'quality', calc: 1},
    {name: 'Fast', cost: 'quality', calc: 1},
    {name: 'Fear', cost: 20, calc: 0},
    {name: 'Fearless', cost: 'baseCostQuality+1', calc: 3},
    {name: 'Flying', cost: 'quality', calc: 1},
    {name: 'Furious',cost: 'mostExpensiveMeleeWeapon/2', calc: 4},
    {name: 'Hero', cost: 0, calc: 0},
    {name: 'Immobile', cost: 'quality*-3', calc: 5},
    {name: 'Impact(X)', cost: 'X * 3', calc: 6},
    {name: 'Psychic(X)', cost: 'X * 15 + 5', calc: 7},
    {name: 'Regeneration', cost: 'tough * 6', calc: 8},
    {name: 'Relentless', cost: 'costOfRangedWeapons * 1.125', calc: 9},
    {name: 'Scout', cost: 'quality', calc: 1},
    {name: 'Slow', cost: '- quality', calc: 10},
    {name: 'Stealth', cost: 'Tough(X) * 2', calc: 11},
    {name: 'Strider', cost: 'Quality / 2', calc: 12},
    {name: 'Transport(X)', cost: 'X * 2', calc: 13}
]

exports = module.exports = baseRules;
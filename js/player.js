
var player = {
    sand: 0,
    gold: 0,
    globalChance: 1,
    buyMax: false,
    efficiency: [],
    goldEfficiency: [],
    lastUpdate: Date.now()
}
  
var firstEfficiency = {
    cost: 10,
    mult: 1,
    amount: 1,
    bought: 0,
}

var firstGoldEfficiency = {
    cost: 10,
    mult: 1,
    amount: 1,
    bought: 0,
    chance: 40,
}
  
player.efficiency.push(firstEfficiency)
player.goldEfficiency.push(firstGoldEfficiency)

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
    bought: 500,
}

var firstGoldEfficiency = {
    cost: 100,
    mult: 1,
    amount: 1,
    bought: 500,
    chance: 4
}
  
player.efficiency.push(firstEfficiency)
player.goldEfficiency.push(firstGoldEfficiency)
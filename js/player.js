
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
    chanceRep: (Math.round((1/(this.firstGoldEfficiency.chance))*10000))/100
}
  
player.efficiency.push(firstEfficiency)
player.goldEfficiency.push(firstGoldEfficiency)
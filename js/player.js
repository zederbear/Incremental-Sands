
var player = {
    sand: 0,
    gold: 0,
    buyMax: false,
    efficiency: [],
    lastUpdate: Date.now()
}
  
var firstEfficiency = {
    cost: 10,
    mult: 1,
    amount: 1,
    bought: 500,
}
  
player.efficiency.push(firstEfficiency)

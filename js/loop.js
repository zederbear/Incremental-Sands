function gameLoop(that) {
  let diff = (Date.now() - that.player.lastUpdate)/1000
  that.player.sand += that.player.efficiency[0].amount * that.player.efficiency[0].mult * diff
  that.player.gold += that.player.goldEfficiency[0].amount * that.player.goldEfficiency[0].mult * diff / that.player.goldEfficiency[0].chance
  
  that.player.efficiency[0].amount += (that.player.gold/1000)
  that.player.lastUpdate = Date.now()
}

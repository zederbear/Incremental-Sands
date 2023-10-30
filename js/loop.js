function gameLoop(that) {
  let diff = (Date.now() - that.player.lastUpdate)/1000
  that.player.sand += that.player.efficiency[0].amount * that.player.efficiency[0].mult * diff
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
  if (getRandomInt(that.player.goldChance) == 0) {
    that.player.gold += that.player.goldEfficiency[0].amount * that.player.goldEfficiency[0].mult * diff
  }

  that.player.lastUpdate = Date.now()
}

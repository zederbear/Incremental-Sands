var app = new Vue({
    el: "#app",
    data: {
      player: player
    },
    methods: {
      buyMarketingGenerator(i) {
        let g = this.player.efficiency[i]
        if (g.cost > this.player.sand) return
        this.player.sand -= g.cost
        this.player.efficiency[i].cost *= 1 + (i+1)*0.25
        this.player.efficiency[i].amount += 1
        this.player.efficiency[i].bought += 1
      },
      buyGoldFinder(i) {
        let g = this.player.goldEfficiency[i]
        if (g.cost > this.player.gold) return
        this.player.gold -= g.cost
        this.player.goldEfficiency[i].cost *= 1+ (i+1)*0.25
        this.player.goldEfficiency[i].amount += 1
        this.player.goldEfficiency[i].bought += 1
        if (this.player.goldEfficiency[i] <= 1) return
        this.player.goldEfficiency[i].chance *= (i+1)*0.95
      },
      format(amount) {
        return format(amount)
      },
      gameLoop() {
        gameLoop(this)
      }
    },
    mounted() {
      setInterval(this.gameLoop, 50)
    }
  })

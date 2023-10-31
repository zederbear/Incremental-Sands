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
